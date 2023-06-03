<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
	import GuildedButton from '$lib/fragments/GuildedButton.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const handleLoginClick = () => {
		goto('https://cardboard.ink/a/ghorde');
	}

	let userActionsVisible = false;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<h1 class="text-xl uppercase">Ghorde</h1>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="flex items-center justify-end gap-4">
					<a href="/models" target="_blank" rel="noopener noreferrer">
						<h3>
							Models
						</h3>
					</a>
					{#if !$page.data.user}
					<GuildedButton text="Login with Guilded" onClick={handleLoginClick} />
					{:else}
					<div class="flex items-center gap-4 relative" 
					on:mouseenter={() => userActionsVisible = true} 
					on:mouseleave={() => userActionsVisible = false} 
					on:focus={() => userActionsVisible = true}>
						<h3>
							{$page.data.user.name}
						</h3>
						<Avatar src={$page.data.user.avatar} width="w-16" />
						{#if userActionsVisible}
						<div class="flex flex-col gap-2 absolute right-0 top-12 bg-surface-900 p-4 left-0 card">
							<a href="/logout">
								<h3>
									Logout
								</h3>
							</a>
						</div>
						{/if}
					</div>
					{/if}
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="px-4 text-xl my-2">
		<slot />
	</div>
</AppShell>
