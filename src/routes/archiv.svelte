<script>
   import IconLibary from "./article/icon-lib.svelte";
   import Utf8Icon from './article/utf8-icon.svelte';
   import Icon from '../lib/components/Icon.svelte';
	import {fade} from 'svelte/transition'
   import { TabControl, TabControlItem } from 'renderless-svelte'
   import { pop, push } from "svelte-stack-router";
   import Navbar from "../lib/appbar/navbar.svelte";
   
   let pdat = [{
   "header": "Nwp-Icon-Libary",
   "info": "SVG IconLibary for PlainJs or Svelte. Enjoy!",
   "file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-04.png",
   "name": "Archiv",
   "icon": "archiv",
   "links": []
   },{
   "header": "Nwp-UTF8-Icons",
   "info": "UTF8 Icons Collection. Enjoy!",
   "file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-02.png",
   "name": "Archiv",
   "icon": "image",
   "links": []
   }];
   let pData = {}
   let pid = 0
   $: pData = pdat[pid]
</script>

<section class="page">
   <Navbar parker>
      <svelte:fragment slot="brand">
         <button class="nav-item h4 font-semibold" on:click={() => push('/')}>
            &#10094;
         </button>
         <h4>nwp-app</h4>
	   </svelte:fragment>
   </Navbar>
   <header data-slot="header" class="py-12 px-8 border-b">
		<div class="container mx-auto px-4 text-center text-gray-600">
			<div class="h2 font-semibold mb-4">{pData.header}</div>
			<div class="text-sm font-thin">{pData.info}</div>
		</div>
	</header>
   <TabControl>
      <div class="pb-2 border-b" slot="tabs" let:tabs>
         <nav class="w-full max-w-4xl mx-auto tabs-bar">        
            {#each tabs as { active, disabled, payload, select, id }, i}
                  <button class="button" class:active on:click="{select}" on:click={() => pid = i} {disabled}>
                     <Icon name={payload.icon} />
                     <span>{payload.name}</span>
                  </button>
            {/each}
         </nav>
      </div>
      <div class="scroll">
         <TabControlItem id="S" payload={{name: "Icon Libary", icon: "image"}} active>
            <div out:fade={{delay: 0, duration: 300}} in:fade={{delay: 320, duration: 300}}>
               <IconLibary />
            </div>
         </TabControlItem>
         <TabControlItem id="R" payload={{name: "UTF8 Icons", icon: "compass"}}>
            <div out:fade={{delay: 0, duration: 300}} in:fade={{delay: 320, duration: 300}}>
               <Utf8Icon />
            </div>
         </TabControlItem>
      </div>
   </TabControl>
</section>

<style>
   .tabs-bar {
      @apply flex items-center max-w-4xl mx-auto;
   }
   .button {
      @apply w-full flex items-center justify-center font-semibold focus:outline-none h-12 text-gray-600 shadow;
   }
   .button {
      @apply inline-flex items-center justify-center font-semibold focus:outline-none h-12 text-gray-600 shadow;
   }
   .button.active {
      @apply bg-gray-100 text-blue-700;
   }
   .button>span {
      @apply pl-4;
   }

</style>



