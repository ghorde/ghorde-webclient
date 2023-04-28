<script lang="ts">
	import { apiAxios } from "$lib/helpers/axios";
	import { token } from "$lib/helpers/global";
	import { onMount } from "svelte";

  let currToken: string
  const getTokenVal = token.subscribe((val) => currToken = val)

  onMount(async() => {
    const userData = await apiAxios.post('/user/info', {code: currToken})
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