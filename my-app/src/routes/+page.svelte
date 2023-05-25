<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { onMount } from "svelte";
	let agents;
	onMount(async () => {
    await fetch(`http://localhost:3000/agents`)
      .then(r => r.json())
      .then(data => {
        agents = data.data;
      });
  })
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section style="width: 100%">
	{#if agents}
		{#each agents as agent}
			{#if agent.isPlayableCharacter}
			<div class=" rounded overflow-hidden shadow-lg my-5 agent-card">
				<div class="font-bold text-xl mb-2">{ agent.displayName }</div>
				<div class="grid grid-cols-5 gap-4">
					<div class="px-6 py-4 d-flex col-span-2">
					  <img class="agent-image" src="{agent.bustPortrait}" alt="">
					</div>
					<div class="px-6 py-4 d-flex col-span-3">
						<p>{agent.description}</p>
					</div>
				</div>
			  </div>
			{/if}
		{/each}
	{/if}

</section>

<style>
	@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
	.agent-image {
		height: 600px;
	}

	.agent-card {
		width: 100%;
		background-color: rgb(231, 231, 231);
	}
</style>
