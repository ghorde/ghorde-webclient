<script lang="ts">
	import { goto } from "$app/navigation";
	import { apiAxios } from "$lib/helpers/axios";
	import { token } from "$lib/helpers/global";

  const refreshToken = async(code: string) => {
    const data = await apiAxios.patch('session/token', {code}).catch((e) => {
      console.log('Error while refreshing token: ', e);
      localStorage.clear();
      goto('https://cardboard.ink/a/ghorde');
    });
    if (data) {
      const {access_token, refresh_token, expires_in, issue_time} = data.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem('expires_in', expires_in);
      localStorage.setItem('issue_time', issue_time);
      console.log(data.data);
      return
    }
    goto('https://cardboard.ink/a/ghorde');
  }
  
  const check = () => {
    const expires_in = localStorage.getItem('expires_in');
    const issue_time = localStorage.getItem('issue_time');
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');
    const now = Math.floor(Date.now()/1000);
    if (issue_time && expires_in && access_token && refresh_token) {
      const expiresOn = parseInt(issue_time) + parseInt(expires_in);
      if (now+86400 > expiresOn) {
        console.log('refreshing token')
        refreshToken(refresh_token);
        token.set(access_token);
        goto('/home')
        return
      }
      else {
        console.log('token is still valid')
        token.set(access_token);
        goto('/home')
        return
      }
    }
    goto('https://cardboard.ink/a/ghorde')
    return
  }
  check();
</script>