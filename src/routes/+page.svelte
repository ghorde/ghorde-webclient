<script lang="ts">
	import { goto } from '$app/navigation';
    import Button from '$lib/components/Button.svelte';
    import Header from '$lib/fragments/Header.svelte';
  
    function handleClick() {
      console.log('Button clicked');
      goto("https://authlink.guildedapi.com/a/endjourney");
    }
  </script>
<main>
    <h1 class="rajdhani">
        Experience<br />Limitless<br />Creativity with<br />AI-Driven Image<br />Generation
    </h1>
    <div class="separator" />
    <div class="signUp">
        <h1 class="rajdhani">
            Login with Guilded
        </h1>
        <Button text="Sign Up" onClick="{handleClick}" />
    </div>
</main>
<style lang="scss">
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 156px);
        gap: 16px;
    }
    .separator {
        height: 30%;
        width: 1px;
        background-color: white;
        z-index: 5;
    }
    .signUp {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
</style>