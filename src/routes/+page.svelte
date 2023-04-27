<script lang="ts">
	import { goto } from '$app/navigation';
    import GuildedButton from '$lib/fragments/GuildedButton.svelte';
    import backgroundplaceholder from '$lib/assets/images/backgroundplaceholder.jpg';

    function handleClick() {
      console.log('Button clicked');
      goto("https://authlink.guildedapi.com/a/endjourney");
    }
  </script>
<main style={`background-image: url(${backgroundplaceholder});`}>
    <div class="modal">
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
    </div>
</main>
<style lang="scss">
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: hidden;
        gap: 16px;
        background-size: cover;
    }
    .modal{
        height: 100%;
        padding-top: 41.4%;
        display: flex;
        gap: 25px;
        transform: scale(130%);
        .separator {
        height: 30%;
        width: 3px;
        background-color: white;
        z-index: 5;
    }
    .signUp {
        height: 100%;
        padding-top: 8%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }
    }
    
</style>