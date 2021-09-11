<script>
  import { userDb } from "../../stores";
  import { supabase } from "../../supabase";
  import Signin from "./Signin.svelte";
  import Profile from "./Profile.svelte";
  
</script>

{#if $userDb}
  <Profile />
{:else}
  <Signin />
{/if}
