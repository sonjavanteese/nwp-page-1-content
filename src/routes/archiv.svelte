<script>
   import {fade} from 'svelte/transition'
   import {Icon, IconList} from '../lib/components/iconlib'
   import { Modal, openModal, closeModal } from 'renderless-svelte'
   import { replace, search, pathname } from "svelte-stack-router"
   import Page from "./article/page.svelte"
   let pData = {
   "header": "Nwp-Icon-Libary",
   "info": "SVG IconLibary for PlainJs or Svelte. Enjoy!",
   "file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-04.png",
   "name": "Archiv",
   "icon": "archiv",
   "links": []
   }
   const showInfo = (obj) => {
         openModal({name: obj})
            // .then(payload => openModal("Turtle 🐢 is following " + payload))
      }
   console.log(pData)
   $: if ($search) {
      let st = $search.replace('?modal=', '')
      console.log("Search:", st)
      let data = IconList[st]
      console.log("Data:", data)
      showInfo(data)
   }
</script>

<svelte:window on:keyup={ev=>ev.key === 'Escape' && closeModal()}></svelte:window>

<Modal let:payload let:close>
	<section on:click={closeModal} class="fixed top-0 left-0 right-0 bottom-0 bg-dark-100 opacity-50 z-20"></section>
	<section transition:fade={{duratio: 200, derlay: 100}} class="fixed top-24 w-full z-30">
		<aside class="w-full max-w-lg mx-auto border rounded-xl bg-light-50">
			<header class="flex items-center border-b py-1 px-4"> <span class="flex-grow">Use Icon</span>
				<button class="focus:outline-none p-2" on:click={close} on:click={()=>replace($pathname)}>
					<Icon name="close" />
				</button>
			</header>
			<article class=""> 
<div class="px-4 py-2">
   <h4 class="h2 uppercase">{payload.name}</h4>
</div>
<div class="px-4 py-1 font-semibold italic text-gray-500">
   HTML
</div>
<div>
<pre class="code">
&lt;svg class=&quot;icon nwp-{payload.name}&quot; style=&quot;font-size: 1rem&quot;&gt;
   &lt;use xlink:href=&quot;#nwp-{payload.name}&quot;&gt;&lt;/use&gt;
&lt;/svg&gt;   
</pre>
<div class="px-4 py-1 font-semibold italic text-gray-500">
   Svelte
</div>
<div>
<pre class="code rounded-b-xl">
&lt;Icon name=&quot;{payload.name}&quot; size=&quot;1rem&quot; /&gt;  
</pre>
</div>
			</article>
		</aside>
	</section>
</Modal>

<Page>
	<header slot="header" class="py-8 border-b">
		<div class="container mx-auto px-4 text-center text-gray-600">
			<div class="text-2xl font-semibold">{pData.header}</div>
			<div class="text-sm font-thin">{pData.info}</div>
		</div>
	</header>
	<article class="content smol-css-grid">
      {#each IconList as item, i}
		<a href="#{$pathname}?modal={i}">
			<figure class="flex flex-col justify-centers text-center border rounded-lg text-gray-500"> <span class="flex-grow py-12">
            <Icon size="6rem" name={item} />
         </span>
				<span class="py-1 border-t uppercase">{item}</span>
			</figure>
		</a>
      {/each}
   </article>

   
<details>
    <summary class="max-w-4xl mx-auto px-4">
      <div class="text-center">Page Data</div>
   </summary>
   <article>
   <pre class="code">{JSON.stringify(pData, null, 2)}</pre>
   </article>
  
</details>
   
</Page>

<style>
	.smol-css-grid {
	  --min: 180px;
	  --gap: 1rem;
	  display: grid;
	  grid-gap: var(--gap);
	  /* min() with 100% prevents overflow
	  in extra narrow spaces */
	  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}
   :not(pre) > code[class*="code"], pre[class*="code"] {
      background: rgb(31, 36, 48);
      color: rgba(251, 191, 36, 1);
   }
   pre[class*="code"] {
      padding: 1rem;
      /* margin: 0 0 1rem 0; */
      margin: 0;
      overflow: auto;
      max-width: 100%;
   }
   details > summary {
      list-style: none;
   }
   details > summary::marker {
      display: none;
   }
</style>