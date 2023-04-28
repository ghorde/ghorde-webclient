<script lang="ts">
	import { goto } from '$app/navigation';
    import GuildedButton from '$lib/fragments/GuildedButton.svelte';

    export let data;

    function pickRandomFromList (list: Array<any>) {
        return list[Math.floor(Math.random() * list.length)];
    }

    function handleClick() {
      console.log('Button clicked');
      goto("/loginPreprocessor");
    }
  </script>
<main style={`background-image: url(${pickRandomFromList(data.backgrounds)});`}>
    <div class="modal">
        <div class="hero-text">
            <h1 class="rajdhani">
                Experience<br />Limitless<br />Creativity with<br />AI-Driven Image<br />Generation
            </h1>
        </div>
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
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            height: 40%;
            width: 3px;
            background-color: white;
        }
        .signUp {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
        }
        .hero-text {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
        }
    }

    @media (max-width: 900px) {
        .modal {
            flex-direction: column;
            width: 100%;
            gap: 5px;
            justify-content: center;
            .separator {
                position: relative;
                transform: translateX(-100%);
                height: 3px;
                width: 50%;
            }
            .hero-text {
                h1 {
                    margin: 10px;
                    font-size: 2rem;
                }
            }
            .signUp {
                h1 {
                    margin: 10px;
                    font-size: 2rem;
                }
            }
        }
    }

    @media (max-height: 700px) and (max-width: 900px) {
        .modal {
            .hero-text {
                h1 {
                    font-size: 1.5rem;
                }
            }
            .signUp {
                h1 {
                    font-size: 1.5rem;
                }
            }
        }
    }
    
</style>