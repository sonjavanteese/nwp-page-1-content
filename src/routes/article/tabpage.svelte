<script>
   import Icon from '../../lib/components/Icon.svelte';
   import Page from './page.svelte';
	import {fade} from 'svelte/transition'
   import { TabControl, TabControlItem } from 'renderless-svelte'
   import Lorem from './lorem.svelte';
   let pData = {
   "header": "Nwp-Tabs",
   "info": "Svelte Component To Handle Tab Navigation",
   "file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-04.png",
   "name": "Archiv",
   "icon": "archiv",
   "links": []
   }
   
</script>


   <TabControl>
      <nav slot="tabs" let:tabs>        
         {#each tabs as { active, disabled, payload, select, id }}
               <button class:active on:click="{select}" on:click={() => console.log("TabIndex", id)} {disabled}>
                  <Icon name={payload.icon} />
                  <span>{payload.name}</span>
               </button>
         {/each}
      </nav>
      <div class="content">
         <TabControlItem id="S" payload={{name: "Settings", icon: "cog"}} active>
                  <div out:fade={{delay: 0, duration: 300}} in:fade={{delay: 320, duration: 300}}>
                     <Lorem />
                  </div>
         </TabControlItem>
         <TabControlItem id="R" payload={{name: "Edit Profile", icon: "edit"}}>
            <div out:fade={{delay: 0, duration: 300}} in:fade={{delay: 320, duration: 300}}>
               <Lorem large/>
            </div>
         </TabControlItem>
      </div>
   </TabControl>

<style>
   nav {
      @apply flex items-center max-w-4xl mx-auto border-l border-r;
   }
   button {
      @apply w-full flex items-center justify-center font-semibold focus:outline-none h-12 text-gray-600 shadow;
   }
   button.active {
      @apply bg-gray-100 text-blue-700;
   }
   button>span {
      @apply pl-4;
   }
	.tab {
		display: block;
		width: 100%;
	}
</style>