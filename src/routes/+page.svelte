<script lang="ts">
	import { goto } from '$app/navigation';
    import GuildedButton from '$lib/fragments/GuildedButton.svelte';

    function handleClick() {
      console.log('Button clicked');
      goto("https://authlink.guildedapi.com/a/endjourney");
    }
  </script>
<main>
    <h1 class="rajdhani">
        Experience<br />Limitless<br />Creativity with<br />AI-Driven Image<br />Generation
    </h1>
    <div class="separator"/>
    <div class="signUp">
        <h1 class="rajdhani" style= "color: #F5C400;">
            Login with Guilded
        </h1>
        <GuildedButton text="Sign Up" onClick="{handleClick}" />
    </div>
</main>
<style lang="scss">
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
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