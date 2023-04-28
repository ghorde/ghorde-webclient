<script lang="ts">
	import { goto } from "$app/navigation";
	import { apiAxios } from "$lib/helpers/axios";
	import { token } from "$lib/helpers/global";
	import { onMount } from "svelte";
  $:code = '';
  const issueToken = async(code: string) => {
    const {data} = await apiAxios.post('session/token', {code});
    const {access_token, refresh_token, expires_in, issue_time} = data.data;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    localStorage.setItem('expires_in', expires_in);
    localStorage.setItem('issue_time', issue_time);
    console.log(data.data);
  }
  onMount(async() => {
    const urlParams = new URLSearchParams(window.location.search);
    code = urlParams.get('code') || '' as string;
    (async() => {
      while(true) {
        if(code && code != '') {
        await issueToken(code);
        const at = localStorage.getItem('access_token');
        if (at) {
          token.set(at);
        }
        goto('/home');
        return;
      }
      }
    }
    )();
  });
</script>
<main>
  {#if !(code) || code == ''}
  <h1>
    Uh oh
  </h1>
    <p>You are supposed to be redirected to this page with a code!<br />That did not happen so apparently something is broken!</p>
  {:else}
    <h1>Got code to login!</h1>
    <p>Code: {code}</p>
  {/if}
</main>

<style lang="scss">
  main {
    padding-top: 156px;
    text-align: center;
  }
</style>