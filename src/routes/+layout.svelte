<script lang="ts">
  import Header from '$lib/fragments/Header.svelte';
</script>

<Header />
<main>
  <slot />
</main>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
  :root {
    background: #210029;
    color: #fff;
    text-shadow: 2px 2px 4px #000000;
    font-family: 'Poppins', sans-serif;
    // overflow-y: hidden;
    overflow-x: hidden;
  }
  :global(.rajdhani) {
    font-family: 'Rajdhani', sans-serif;
  }
  </style>