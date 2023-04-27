<script lang="ts">
	import { goto } from '$app/navigation';
    import GuildedButton from '$lib/fragments/GuildedButton.svelte';

    export let data;

    function pickRandomFromList (list: Array<any>) {
        return list[Math.floor(Math.random() * list.length)];
    }

    function handleClick() {
      console.log('Button clicked');
      goto("https://authlink.guildedapi.com/a/endjourney");
    }
  </script>
<main style={`background-image: url(${pickRandomFromList(data.backgrounds)});`}>
    <div class="modal">
    <h1 class="rajdhani">
        Experience<br />Limitless<br />Creativity with<br />AI-Driven Image<br />Generation
    </h1>

    <div class="separator"/>
    <div class="signUp">
        <h1 class="rajdhani" style= "color: #F5C400;">
            Login with Guilded
        </h1>
        <GuildedButton text="Log In" onClick="{handleClick}" />
    </div>
    </div>
</main>
<style lang="scss">
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-size: cover;
        background-position: center center;
        position: relative;
        text-shadow: 2px 2px 4px #000000;
        h1 {
            font-size: 3rem
        }
    }
    .modal{
        height: 100%;
        width: 45%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        .separator {
            height: 40%;
            width: 3px;
            background-color: white;
        }
        .signUp {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
        }
    }
    
</style>