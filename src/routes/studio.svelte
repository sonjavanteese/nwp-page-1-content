<script>
   import TabPage from './article/tabpage.svelte'
   import Page from "./article/page.svelte"
   import appData from '../lib/_appdata'
   import Tabpage from './article/tabpage.svelte'
   let pData = appData[3]
   let subData = {
   "header": "Nwp-Tabs",
   "info": "Svelte Component To Handle Tab Navigation"
   }
   let subPage = true
</script>

{#if subPage}
<Page>
   <header slot="header" class="py-2 border-b shadow">
      <div class="container mx-auto px-4 text-center text-gray-600">
         <div class="text-xl font-semibold">{pData.header}</div>
         <div class="text-sm font-thin">{pData.info}</div>
      </div>
   </header>
   <Tabpage />
</Page>
{:else}
   <Page>
      <header data-slot="header" class="py-8 border-b shadow">
         <div class="container mx-auto px-4 text-center text-gray-600">
            <div class="text-2xl font-semibold">{pData.header}</div>
            <div class="text-sm font-thin">{pData.info}</div>
         </div>
      </header>
   </Page>
{/if}
