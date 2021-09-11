<script>
  import Icon from '../lib/components/Icon.svelte'
  import Lorem from "./article/lorem.svelte"
  import Page from "./article/page.svelte"
  import appData from "../lib/_appdata"

  let pData = {
			"header": "Nwp-Home",
			"info": "Datenbanken und Archive",
			"file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-02.png",
			"name": "Start",
			"icon": "start",
			"links": [
				{
					"name": "Admin",
					"path": "/admin",
					"primary": true
				},
				{
					"name": "Settings",
					"path": "/settings"
				}
			]
		}
  const nav = [
    ["Start", "/", "start", false],
    ["Archiv", "/archiv", "archiv", true],
    ["Studio", "/studio", "studio", true],
    ["User", "/user", "user", true]
  ];
</script>

<Page>
  <header data-slot="header" class="py-24 border-b">
    <div class="container mx-auto px-4 text-center">
      <h1>{pData.header}</h1>
      <h3>{pData.info}</h3>
    </div>
  </header>
    <article class="content smol-flexbox">
      {#each nav as [name, path, icon, op], i}
      {#if op}
      <a href="#{path}">
        <figure class="flex flex-col justify-centers text-center border rounded-lg text-gray-500"> <span class="flex-grow py-12">
              <Icon size="6rem" name={icon} />
          </span>
          <span class="py-1 border-t uppercase">{name}</span>
        </figure>
      </a>
      {/if}
      {/each}
   </article>
</Page>

<style>
/*   .smol-css-grid {
      --min: 320px;
      --gap: 1rem;
      display: grid;
      grid-gap: var(--gap);
      grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    } */
.smol-flexbox {
  --min: 320px;
  --gap: 1rem;

  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
}
.smol-flexbox > * {
  flex: 1 1 var(--min);
}
</style>
