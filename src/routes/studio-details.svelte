<script>
   import {supabase} from '../lib/supabase'
   import Icon from '../lib/components/Icon.svelte';
   import { pop, push } from "svelte-stack-router";
   import Navbar from "../lib/appbar/navbar.svelte";
   export let params = {};

   let pData = {
			"header": "Movie - Details",
			"info": "Carmen Details",
			"file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-05.png",
			"name": "Movie Details",
			"path": "/studio/",
			"icon": "studio",
			"links": []
		}
      let movies = []
   const fetchData = async (id) => {
      let { data, error } = await supabase
      .from('carmen')
      .select('*')
      .eq('id', id)
      if (data) {
         movies = data
      } else {
         alert(error)
      }
   };
   let promise = fetchData(params.id)
   $: fetchData(params.id)
</script>

<section class="page">
   <Navbar parker>
      <svelte:fragment slot="brand">
         <span class="cursor-pointer" on:click={() => pop()}>
            &#10094;
         </span>
         <a href="#/" class="nav-item"><img style="height: 50px; width: auto;" id="loggo" src="https://nwp-cgn.de/img/poser/logo-cgn.svg"></a>
	   </svelte:fragment>
   {pData.name}
   </Navbar>
   <article class="scroll">
     <header data-slot="header" class="py-4 px-8 border-b">
         <div class="container mx-auto px-4 text-center text-gray-600">
            <!-- <div class="h4 font-semibold mb-2">{pData.header}</div> -->
            <h4 class="text-4xl font-semibold">{pData.info}</h4>
         </div>
      </header> 
      <article class="content">
         <!-- <pre class="code">{JSON.stringify(movies[0], null, 2)}</pre> -->
          {#each movies as {name, image, categorie, description, front, back, id}, i}
         <div class="flex">
            <figure class="pr-8">
            <img class="object-cover" src={image} />
            </figure>
            <article>
               <h1 class="text-8xl font-bold mb-4">{name}</h1>
               <h2 class="font-semibold text-gray-500">{categorie}</h2>
               
            </article>
         </div>
         <div class="py-4 px-4 my-8 border-t border-b text-xl text-gray-400 bg-gray-50">
            <p>{description}</p>
         </div>
         <div class="flex max-w-full">
            <div><img class="border" src={front}></div>
            <div><img class="border" src={back}></div>
         </div>
         {/each} 
      </article>
   </article>
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



