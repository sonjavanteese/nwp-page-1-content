<script>
  import appData from '../lib/_appdata'
  import Auther from './user/comp/auther.svelte'
  import Page from "./article/page.svelte"
  import { supabase, userData, userObj } from "./user/supabase";
  let pData = appData[4]
</script>

<Page>
  <header data-slot="header" class="py-8 border-b">
     <div class="container mx-auto px-4 text-center">
        <h1>{pData.header}</h1>
        <h3>{pData.info}</h3>
     </div>
  </header>  
  <Auther /> 
</Page>


