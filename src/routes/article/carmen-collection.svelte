<script>
   import Loader from '../../lib/components/Loader.svelte';
   import {fade} from 'svelte/transition'
   import {Icon, IconList} from '../../lib/components/iconlib'
   import { Modal, openModal, closeModal } from 'renderless-svelte'
   import { replace, search, pathname } from "svelte-stack-router"
   import {supabase} from '../../lib/supabase'
   let movies = []
   const fetchIcons = async () => {
      let { data, error } = await supabase
      .from('carmen')
      .select('*')
      if (data) {
         movies = data
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
      // console.log("Search:", st)
      let data = movies[st]
      // console.log("Data:", data)
      showInfo(data)
   }
</script>

<svelte:window on:keyup={ev=>ev.key === 'Escape' && closeModal()}></svelte:window>
{#await promise}
   <Loader />
{:then value}

<article class="content smol-css-grid">
   <!-- <pre class="code">{JSON.stringify(movies[0], null, 2)}</pre> -->
    {#each movies as {name, image, id}, i}
   <a href="#{$pathname}/{id}">
      <figure class="flex flex-col justify-centers text-center border rounded-lg text-gray-500">
      <span class="flex-grow">
         <img class="h-48 w-full object-cover rounded-t-xl" src={image} />
      </span>
         <span class="py-1 border-t truncate">{name}</span>
      </figure>
   </a>
   {/each} 
</article>



<Modal let:payload let:close>
	<section on:click={closeModal} class="fixed top-0 left-0 right-0 bottom-0 bg-dark-100 opacity-50 z-20"></section>
	<section transition:fade={{duratio: 200, derlay: 100}} class="fixed top-24 w-full z-30">
		<aside class="w-full max-w-lg mx-auto border rounded-xl bg-light-50">
			<header class="flex items-center border-b py-1 px-4"> <span class="flex-grow">Details</span>
				<button class="focus:outline-none p-2" on:click={close} on:click={()=>replace($pathname)}>
					<Icon name="close" />
				</button>
			</header>
			<article class=""> 
            <div class="content">
              <h4>{payload.name}</h4> 
              <p>{payload.categorie}</p>
              <p class="text-sm text-gray-500 italic">{payload.description}</p>
            </div>
            <details>
               <summary class="block text-center cursor-pointer">Details</summary>
               <pre class="code rounded-b-xl">{JSON.stringify(payload, null, 2)}</pre>
            </details>
            
			</article>
		</aside>
	</section>
</Modal>

   {:catch error}
   Error
{/await}
<style>
	.smol-css-grid {
	  --min: 250px;
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