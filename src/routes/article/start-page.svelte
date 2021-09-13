<script>
   // import { pathname } from "svelte-stack-router";
   import Icon from "../../lib/components/Icon.svelte";
   import Page from "./page.svelte";
   import { Steps } from "svelte-steps";
   import { fade } from "svelte/transition";

   export let steps = [
      {
      header: "Nwp-CGN",
         info: "Web Design and Development",
         file: "https://nwp-cgn.de/img/toon/vio1/NWP-EE-03.png",
      text: "Welcome",
      icon: Icon,
      iconProps: {
         name: "start",
         size: "20px"
      }
      },
      {
      header: "Nwp-Archiv",
         info: "Adult Movie Collection",
         file: "https://nwp-cgn.de/img/toon/vio1/NWP-EE-04.png",
      path: "/archiv",
      text: "Collection",
      icon: Icon,
      iconProps: {
         name: "archiv",
         size: "20px"
      }
      },
      {
      header: "Nwp-Studio",
         info: "Blackburn Projekt Archiv",
         file: "https://nwp-cgn.de/img/toon/vio1/NWP-EE-05.png",
      path: "/studio",
      text: "Projekte",
      icon: Icon,
      iconProps: {
         name: "studio",
         size: "20px"
      }
      },
      {
      header: "Nwp-Settings",
         info: "Settings and Options",
         file: "https://nwp-cgn.de/img/toon/vio1/NWP-EE-07.png",
      path: "/user",
      text: "User",
      icon: Icon,
      iconProps: {
         name: "settings",
         size: "20px"
      }
      },
   ];
   let pD;
   let currentTab = 0;
   $: pD = steps[currentTab]
   // $: if ($pathname !== '/') {
   //    currentTab = 0
   // }
</script>

<Page>
  <footer slot="footer" class="py-8">
    <Steps {steps} bind:current={currentTab} />
  </footer>
  {#key currentTab}
    <div in:fade={{delay: 310, duration: 300}} out:fade={{duration: 300}} 
      class="h-full flex flex-col justify-center border bg-no-repeat bg-contain bg-right-bottom" 
      style="background-image: url({pD.file});">
      <article class="w-full max-w-2xl mx-auto px-8">
        <div>
          <h1 class="mb-4">{pD.header}</h1>
          <h4>{pD.info}</h4>
          {#if pD.path}
            <p class="mt-4"><a href="#{pD.path}" class="button primary">{pD.text}</a></p>
          {/if}
        </div>  
      </article>
    </div>
  {/key}
</Page>

<style>
  .button {
    @apply inline-block py-3 px-6 mr-4 leading-none text-dark-800 bg-gray-50 shadow-sm font-semibold rounded;
  }
  [disabled].button {
    @apply bg-transparent text-gray-200 shadow-sm;
  }
</style>
