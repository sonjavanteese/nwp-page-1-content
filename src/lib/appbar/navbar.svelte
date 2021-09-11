<script>
	import { userObj, userData } from '../supabase';
  import { pathname } from "svelte-stack-router"
  import Icon from '../components/Icon.svelte';
  //import logo from '../../assets/logo2.svg';
  export let secondary = false;
  export let dark = false;
  export let parker = false;
  export let center = false;
  export let navData = [];
  export let isOpen = false
  const toggle = () => {
    isOpen = !isOpen
  }
</script>
<div class="bg-dark-500 text-gray-400 text-xs font-thin py-1 px-2 flex items-center justify-end">
    {$userData ? `${ $userData.username } | ` : ''}
    <span class="px-1"></span>
    {$userObj ? $userObj.email : '3:00'}

</div>
<section class="header" class:secondary="{secondary}" class:parker="{parker}" class:dark="{dark}">
    <div class="container mx-auto px-4">
  <nav class="flex-bar">
    <a href="#/" class="nav-item"><img style="height: 50px; width: auto;" id="loggo" src="https://nwp-cgn.de/img/poser/logo-cgn.svg"></a>
    <div class="titel" class:center="{center}"><slot name="label" /></div>
    {#each navData as [name, path], i}
      <a href="#{path}" class="nav-item" class:active={$pathname === path}>{name}</a>
    {:else}
      <slot />
    {/each}
    {#if $userObj}
    <span class="nav-item text-white">
        <Icon size="22px" name="globe" />
    </span>
    {:else}
    <span class="nav-item text-gray-600">
        <Icon size="22px" name="earth" />
    </span>
    {/if}
  </nav>
</div>

</section>


<style>
  :root {
      --navbar-bar-color-btn: #af5002;
      --navbar-bar-color-btn-active: #7d3800;
      --navbar-bar-color-btn-act: #4d2100;
      --navbar-bar-color: #e0e0e0;
      --navbar-bar-bg: #f97c17;
      --navbar-body-height: 60px;
      --navbar-body-width: 54px;
      --navbar-item-active: rgba(255, 255, 255, 0.1);
  }
  .dark {
      --navbar-bar-color-btn: #e0e0e0;
      --navbar-bar-color: #e0e0e0;
      --navbar-bar-bg: #424656;
      --navbar-item-active: rgba(255, 255, 255, 0.1);
  }
  .secondary {
      --navbar-bar-color-btn: #e0e0e0;
      --navbar-bar-color: #e0e0e0;
      --navbar-bar-bg: #2172d2;
      --navbar-item-active: rgba(255, 255, 255, 0.1);
  }
  .parker {
      --navbar-bar-color-btn: #e0e0e0;
      --navbar-bar-color: #e0e0e0;
      --navbar-bar-bg: #245b52;
      --navbar-item-active: rgba(255, 255, 255, 0.1);
  }
  .header {
      background-color: var(--navbar-bar-bg);
      color: var(--navbar-bar-color);
  }
  .flex-bar {
      display: flex;
      width: 100%;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: stretch;
      min-height: var(--navbar-body-height);
      align-items: center;
  }

  .flex-bar > * {
      flex: 0 1 auto;
      align-self: center;
  }
  .flex-bar > .titel {
      flex: 1 1 auto;
  }
  .flex-bar > .titel {
      font-size: 1.5rem;
      font-weight: 600;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
  }
  .flex-bar > .titel.center {
      text-align: center;
  }
  .flex-item {
      display: inline-flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
  }

  .nav-item {
      display: inline-flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      padding: 0 0.5rem;
      min-height: var(--navbar-body-height);
      min-width: var(--navbar-body-width);
      cursor: pointer;
  }

  .nav-item > * {
      align-self: center;
  }

  .nav-item svg {
      color: var(--navbar-bar-color-btn);
  }
  .nav-item.active svg {
      color: var(--navbar-bar-color-btn-act);
  }

  .nav-item.active {
      background-color: var(--navbar-item-active);
  }
</style>



