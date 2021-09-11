<script>
  import {userObj} from "../supabase";
  import Login from '../login.svelte';
  import Profil from '../profil.svelte';
</script>

{#if $userObj}
<Profil />
{:else}
<Login />
{/if}
