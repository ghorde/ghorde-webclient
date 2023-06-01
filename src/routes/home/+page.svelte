<script lang="ts">
	import { apiAxios } from "$lib/helpers/axios";
	import { onMount } from "svelte";

  export let data;

  const currToken = data.token;

  onMount(async() => {
    const userData = await apiAxios.post('/user/info', {code: currToken})
    console.log(userData.data)
  })
</script>

<div class="home">
  Token is {currToken}
</div>

<style lang="scss">
  .home {
    padding-top: 156px;
    text-align: center;
    width: 100%;
  }
</style>