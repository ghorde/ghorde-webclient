<script lang="ts">
    import logo from '$lib/assets/images/logo.png';
	export let text: string;
	export let disabled: boolean = false;
	export let onClick: () => void;
</script>

<button class={disabled ? 'disabled' : ''} on:click={onClick}>
    <div class="container">
        <img src={logo} alt="Guilded Logo" width="22px" height="22px">
        {text}
    </div>
</button>

<style lang="scss">
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        img {
            border-radius: 4px ;
        }
    }
	button {
		background-color: #2E2A2A;
		border: none;
		border-radius: 5px;
		color: #fff;
		cursor: pointer;
		font-size: 16px;
		padding: 10px 20px;
		transition: background-color 0.3s ease;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;

		&.disabled {
			background-color: #ccc;
			cursor: not-allowed;
		}

		&:hover:not(.disabled) {
			background-color: #2980b9;
            transform: scale(102%);
		}
	}
</style>
