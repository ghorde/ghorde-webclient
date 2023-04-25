<script lang="ts">
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
</script>
{#if !(code)}
<h1>
  Uh oh
</h1>
<p>You are supposed to be redirected to this page with a code!<br />That did not happen so apparently something is broken!</p>
{:else}
<h1>Got code to login!</h1>
<p>Code: {code}</p>
{/if}