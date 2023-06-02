<script lang="ts">
	import Guilded_color from '$lib/assets/images/Guilded_color.svg';
	export let text: string;
	export let disabled: boolean = false;
	export let onClick: () => void;
</script>

<button class={disabled ? 'disabled' : ''} on:click={onClick}>
    <div class="container">
        <img src={Guilded_color} alt="Guilded Logo" width="22px" height="22px">
        {text}
    </div>
</button>

<style lang="postcss">
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
	button {
		backdrop-filter: saturate(180%) blur(10px);
		background-color: #2d2a2ece;
		border: none;
		border-radius: 5px;
		color: #ffffffce;
		cursor: pointer;
		font-size: 16px;
		padding: 10px 20px;
		transition: background-color 0.3s ease;
		font-weight: bold;

		&.disabled {
			background-color: #ccccccce;
			cursor: not-allowed;
		}

		&:hover:not(.disabled) {
			background-color: #494343ce;
            transform: scale(102%);
		}
	}
</style>
