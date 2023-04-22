<script lang="ts">
    import Button from '$lib/components/Button.svelte';
  
    function handleClick() {
      console.log('Button clicked');
    }
  </script>
  
  <Button text="Click me" onClick="{handleClick}" />