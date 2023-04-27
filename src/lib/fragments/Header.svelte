<script>
	import MagicalText from "$lib/components/MagicalText.svelte";

</script>
<header>
    <!-- <h1 class="rajdhani">ghorde</h1> -->
    <MagicalText label="ghorde" />
</header>
<style lang="scss">
    header {
        position: absolute;
        z-index: 1000;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 156px;
        background: rgba(255, 255, 255, 0.06);
        color: #DB00FF;
        border-radius : 0px 0px 8px 8px;
    }
    h1 {
        font-size: 5rem;

    }
</style>