<script>
  import Offcanvas from 'sveltestrap/src/Offcanvas.svelte'
  import Icon from "../components/Icon.svelte"
  import { location } from "svelte-stack-router"
  import {sbLinkClick} from './sblink'
  export let isOpen = false
  export let navData = [];
  export let subData = [];
  const toggle = () => {
    setTimeout(() => {
      isOpen = !isOpen
    }, 100)
  }
</script>

<Offcanvas {isOpen} {toggle} header="Nwp-Cgn" backdrop={true} placement="start" body={false}>
  <nav class="list-group list-group-flush border-bottom">
      {#each navData as [n, p, icon]}
          <a href="#{p}" use:sbLinkClick on:sbClick={toggle} class="d-flex align-items-center justify-content-between list-group-item list-group-item-action" class:active={$location === p}>
            <span>{n}</span>
            <Icon name={icon} />
          </a>
      {:else}
      <button use:sbLinkClick on:sbClick={toggle} class="d-flex align-items-center justify-content-between list-group-item list-group-item-action">
        <span>Close</span>
        <Icon name="close" />
      </button>
    {/each}
    {#if subData}
    <li class="list-group-item list-group-item-dark"><span class="fs-4 fw-bold">Documentation</span></li>
    {/if}
    {#each subData as [n, p, icon]}
          <a href="#{p}" use:sbLinkClick on:sbClick={toggle} class="d-flex align-items-center justify-content-between list-group-item list-group-item-action" class:active={$location === p}>
            <span>{n}</span>
            <Icon name={icon} />
          </a>
      {:else}
      <button use:sbLinkClick on:sbClick={toggle} class="d-flex align-items-center justify-content-between list-group-item list-group-item-action">
        <span>Close</span>
        <Icon name="close" />
      </button>
    {/each}
  </nav>
</Offcanvas>