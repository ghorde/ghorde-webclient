<script lang="ts">
	import { goto } from '$app/navigation';
    import Button from '$lib/components/Button.svelte';
  
    function handleClick() {
      console.log('Button clicked');
      goto("https://authlink.guildedapi.com/a/endjourney");
    }
  </script>
  
  <Button text="Click me" onClick="{handleClick}" />