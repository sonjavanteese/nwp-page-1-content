<script context="module">
	import { writable } from 'svelte/store';
	export const alert = writable(null);
	export const type = writable(0);
	export const setAlert = (message, alertId) => {
		type.set(alertId)
		alert.set(message)
	}
</script>
<script>
	import { onDestroy } from 'svelte'
	import {fade, fly, slide} from 'svelte/transition';
	const alertModell = [{id:0,name:"Note",type:"primary",icon:"&#128462;",duration:3e3},{id:1,name:"Error",type:"danger",icon:"&#128503;",duration:3e3},{id:2,name:"Success",type:"success",icon:"&#128505;",duration:3e3},{id:2,name:"Warning",type:"warning",icon:"&#9888;",duration:3e3}];
	export let footer = false;
	export let ms = 2000
	let visible
	let timeout
	let aidata
	$: aidata = alertModell[$type]
	const onMessageChange = (message, ms) => {
		clearTimeout(timeout)
		if (!message) {
			visible = false
		} else {
			visible = true
			if (ms > 0) timeout = setTimeout(() => {
				visible = false
				alert.set(null)
			}, ms)
		}
	}
	$: onMessageChange($alert, ms)
	onDestroy(()=> clearTimeout(timeout))
</script>

{#if visible}
<aside transition:fly="{{ y: -200, duration: 500 }}" class="alert-wrapp" on:click={() => visible = false}>
	<article class="alert">
		<header class="alert-header"
						class:bg-danger={aidata.type === 'danger'}
						class:bg-success={aidata.type === 'success'}	
						class:bg-warning={aidata.type === 'warning'}	 
						on:click={() => visible = false}>
			<span class="utf8">{@html aidata.icon}</span>				
			<span class="titel">{aidata.name}</span>
			<span class="grow" />
			<span class="utf8">&#10005;</span>
		</header>
		<article class="alert-content">
			<span class="body">{@html $alert}</span>
			{#if aidata.icon}
			<span class="utf8">{@html aidata.icon}</span>
			{/if}
		</article>
		{#if footer}
		<footer class="alert-footer">
			<span on:click={() => visible = false}>Cancel</span>
			<span on:click={() => visible = false}>Close</span>
		</footer>
		{/if}
	</article>
</aside>
{/if}

<style>
	.alert-wrapp {
		width: auto;
		max-width: 400px;
		height: auto;
		max-height: 90vh;
		position: fixed;
		z-index: 2000;
		right: 1rem;
		top: 65px;
		margin-left: 1rem;
		margin-bottom: 1rem;
	}
	.alert {
		padding: 0;
		margin-bottom: 1rem;
		display: block;
		cursor: pointer;
		box-shadow: -8px 8px 10px -4px rgba(125,125,125,0.7);
	}
	.alert-header {
		display: flex;
		align-items: center;
		padding: 0.2rem 0.5rem 0.2rem 0.5rem;
		background-color: #2172d2;
		color: #fdfdfd;
	}
	.grow {
		flex: 1;
	}
	.alert-header .titel {
		padding-left: 0.5rem;
		font-size: 1.2rem;
		font-weight: 700;
	}
	.alert-header .utf8 {
		font-size: 20px;
	}
	.alert-content {
      display: flex;
		align-items: center;
		padding: 0.75rem 0.75rem;
		background-color: #ffffff;
		color: #555555;
		
	}
	.alert-content .utf8 {
		font-size: 38px;
		padding: 0.1rem 0.5rem;
	}
	.alert-content .body {
		font-size: 1.3rem;
		color: #555555;
	}
	.alert-footer {
      display: flex;
		align-items: center;
      justify-content: space-between;
		padding: 0.25rem 0.5rem;
		background-color: #3d3d3d;
		color: #ffffff;
	}
	.alert>*:first-child {
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
	}
	.alert>*:last-child {
		border-bottom-left-radius: 6px;
		border-bottom-right-radius: 6px;
	}
	.bg-danger {
		background-color: #b10000;
		color: #fdfdfd;
	}
	.bg-success {
		background-color: #198754;
		color: #fdfdfd;
	}
	.bg-warning {
		background-color: #ffc107;
		color: #fdfdfd;
	}
</style>