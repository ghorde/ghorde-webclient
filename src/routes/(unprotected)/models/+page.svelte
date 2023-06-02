<script lang="ts">
	import ModelCard from "$lib/fragments/ModelCard.svelte";
  export let data; 
  const {models} = data;
</script>

<h1>
  Models
</h1>
<div class="flex flex-wrap justify-center gap-3">
  {#each models as model}
    <ModelCard {...model} />
  {/each}
</div>
