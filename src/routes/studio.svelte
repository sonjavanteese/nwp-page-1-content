<script>
    import {supabase} from '../lib/supabase'
   import Icon from '../lib/components/Icon.svelte';
   import { pop, push, pathname } from "svelte-stack-router";
   import Navbar from "../lib/appbar/navbar.svelte";
   export let params = {};
   let movies = []
   const fetchMovies = async () => {
      let { data, error } = await supabase
      .from('carmen')
      .select('*')
      if (data) {
         movies = data
      } else {
         alert(error)
      }
   };
   let promise = fetchMovies()
   
   let pData = {
			"header": "Movie-Collection",
			"info": "Carmen Rivera Collection",
			"file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-05.png",
			"name": "Movie Collection",
			"path": "/studio/",
			"icon": "studio",
			"links": []
		}
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

   
         <!--  <CarmenDetails {params} /> -->
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
   </article>
</section>

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



