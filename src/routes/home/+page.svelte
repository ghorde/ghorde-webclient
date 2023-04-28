<script lang="ts">
	import { apiAxios } from "$lib/helpers/axios";
	import { token } from "$lib/helpers/global";
	import { onMount } from "svelte";

  onMount(async() => {
    const userData = await apiAxios.post('/user/info', {code: token})
    console.log(userData.data)
  })
</script>

<div class="home">
  Token is {$token}
</div>

<style lang="scss">
  .home {
    padding-top: 156px;
    text-align: center;
    width: 100%;
  }
</style>