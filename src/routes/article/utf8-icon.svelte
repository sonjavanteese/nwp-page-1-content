<script>
	import Loader from '../../lib/components/Loader.svelte';
   import {fade} from 'svelte/transition'
   import {Icon, IconList} from '../../lib/components/iconlib'
   import { Modal, openModal, closeModal } from 'renderless-svelte'
   import { replace, search, pathname } from "svelte-stack-router"
   import {supabase} from '../../lib/supabase'
   let uicons = []
   const fetchIcons = async () => {
      let { data, error } = await supabase
      .from('utf8_icons')
      .select('*')
      if (data) {
         uicons = data
      } else {
         alert(error)
      }
   };
   let promise = fetchIcons()
   const showInfo = (obj) => {
         openModal(obj)
            // .then(payload => openModal("Turtle 🐢 is following " + payload))
      }
   $: if ($search) {
      let st = $search.replace('?modal=', '')
      console.log("Search:", st)
      let data = uicons[st]
      console.log("Data:", data)
      showInfo(data)
   }
   const getIcon = (data) => `{@html ${data}}`;
</script>

<svelte:window on:keyup={ev=>ev.key === 'Escape' && closeModal()}></svelte:window>
   {#await promise}
      <Loader />
   {:then value}
      <article class="content smol-css-grid">
         {#each uicons as {name, icon, id}, i}
         <a href="#{$pathname}?modal={i}">
            <figure class="flex flex-col justify-centers text-center border rounded-lg text-gray-500"> 
               <span class="flex-grow py-8 text-7xl">
                  {@html icon}
               </span>
               <span class="py-1 border-t">{name}</span>
            </figure>
         </a>
         {/each}
      </article>
      {:catch error}
      <div>Error: {JSON.stringify(error)}</div>
   {/await}

<Modal let:payload let:close>
   <section on:click={closeModal} class="fixed top-0 left-0 right-0 bottom-0 bg-dark-100 opacity-50 z-20"></section>
   <section transition:fade={{duratio: 200, derlay: 100}} class="fixed top-24 w-full z-30">
      <aside class="w-full max-w-lg mx-auto border rounded-xl bg-light-50">
         <header class="flex items-center border-b py-1 px-4 h4"> <span class="flex-grow">Icon</span>
            <button class="focus:outline-none p-2" on:click={close} on:click={()=>replace($pathname)}>
               <Icon name="close" />
            </button>
         </header>
         <article class=""> 
<div class="px-4 py-2">
   <p class="text-gray-400">Name</p>
   <h4 class="h2 uppercase">{payload.name}</h4>
</div>
<div class="px-4 py-1 font-semibold italic text-gray-500">
   HTML
</div>
<div>
<pre class="code">
&lt;span style=&quot;font-size: 1rem;&quot;&gt;
   {payload.icon}
&lt;/span&gt;   
</pre>
<div class="px-4 py-1 font-semibold italic text-gray-500">
   Svelte
</div>
<div>
<pre class="code rounded-b-xl">
&lt;span style=&quot;font-size: 2rem;&quot;&gt;
   {@html payload.icon} 
&lt;/span&gt;  
</pre>
</div>
         </article>
      </aside>
   </section>
</Modal>   


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

</style>