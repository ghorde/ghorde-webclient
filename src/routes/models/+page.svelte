<script lang="ts">
	import ModelCard from "$lib/fragments/ModelCard.svelte";
	import { apiAxios } from "$lib/helpers/axios";
  export let data; 
  const {models} = data;
</script>

<div class="modelsContainer">
  {#each models as model}
    <ModelCard {...model} />
  {/each}
</div>

<style lang="scss">
  .modelsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 156px;
  }
</style>
