<script lang="ts">
	import { onMount } from "svelte/types/runtime/internal/lifecycle";

  $:code = '';
  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    code = urlParams.get('code') || '' as string;
  });
</script>
{#if !(code) || code == ''}
<h1>
  Uh oh
</h1>
<p>You are supposed to be redirected to this page with a code!<br />That did not happen so apparently something is broken!</p>
{:else}
<h1>Got code to login!</h1>
<p>Code: {code}</p>
{/if}