<script>
  import appData from '../lib/_appdata'
  import Login from './user/login.svelte';
  import Page from "./article/page.svelte"
  import Icon from '../lib/components/Icon.svelte';
   import Profil from './user/profil.svelte';
	import {fade} from 'svelte/transition'
   import { TabControl, TabControlItem } from 'renderless-svelte'
   import { pop, push } from "svelte-stack-router";
   import Navbar from "../lib/appbar/navbar.svelte";
  import { supabase, userData, userObj } from "./user/supabase";
  let pData = appData[4]
</script>


{#if $userObj}
<section class="page">
  <Navbar parker>
     <button slot="brand" class="nav-item text-lg font-semibold" on:click={() => push('/')}>
        <Icon name="goback" />
        <span class="ml-2">Back</span>
     </button>
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
                 <button class="button" class:active on:click="{select}" {disabled}>
                    <Icon name={payload.icon} />
                    <span>{payload.name}</span>
                 </button>
           {/each}
        </nav>
     </div>
     <div class="scroll">
        <TabControlItem id="S" payload={{name: "Profil", icon: "user"}} active>
           <div out:fade={{delay: 0, duration: 300}} in:fade={{delay: 320, duration: 300}}>
              <Profil />
           </div>
        </TabControlItem>
        <TabControlItem id="R" payload={{name: "Edit", icon: "edit"}}>
           <div out:fade={{delay: 0, duration: 300}} in:fade={{delay: 320, duration: 300}}>
              <Profil />
           </div>
        </TabControlItem>
     </div>
  </TabControl>
</section>
{:else}
<Page><Login /></Page>
{/if}




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