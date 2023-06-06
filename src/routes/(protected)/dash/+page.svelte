<script lang="ts">
	import { page } from "$app/stores";
  import { InputChip } from '@skeletonlabs/skeleton';

  export let data;

  let list: string[] = data.userData.negativePrompt;
  let hordeToken = data.userData.hordeToken ? data.userData.hordeToken : "";

</script>
<h1 class="my-5">{$page.data.user.name}'s Dashboard</h1>
<form class="flex flex-col gap-4" action="?/updateUserData" method="post">
  <label class="label" for="horde-token">
    Horde Token
    <input class="input" type="text" name="horde-token" value={hordeToken}>
  </label>
  <label for="negative-prompts">
    Negative Prompts
    <InputChip bind:value={list} name="negative-prompts" placeholder="Enter negative prompts." />
  </label>
  <!-- submit button -->
  <button class="btn btn-primary variant-ghost-surface" type="submit">
    Save
  </button>
</form>