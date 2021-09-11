<script>
  import { StackRouter, slide, push } from "svelte-stack-router";
  import IconLib, {IconList} from './lib/components/iconlib';
  import routes from "./routes";
  import Navbar from "./lib/appbar/navbar.svelte";
  import Alert, {
    alert,
    setAlert,
  } from "./lib/components/nwp-alert/alert.svelte";
  import Loader from "./lib/components/Loader.svelte";
  import { supabase, userData, userObj } from "./routes/user/supabase";

  const nav = [
    ["Start", "/", "start", true],
    ["Archiv", "/archiv", "archiv", true],
    ["Studio", "/studio", "studio", true],
    ["User", "/user", "user", true]
  ];

  let loading = false;
  userObj.set(supabase.auth.user());
  $: if ($userObj) {
    setAlert(`Signed Inn as ${$userObj.email}`, 0);
  }

  $: if (loading) {
    console.log("loading: true", 0);
  } else {
    console.log("loading: false", 0);
  }
  supabase.auth.onAuthStateChange((event, session) => {
    if (session && session.user) {
      userObj.set(session.user);
      console.log("Auth Ok", event, session);
    } else {
      userObj.set(null);
      userData.set(null);
      console.log("Auth Error", event, session);
    }
  });
  // console.log(IconList)
</script>

{@html IconLib}
{#if loading}
   <Loader />
{/if}
<Alert ms={3000} />
<div class="z-10">
<Navbar parker navData={nav} />
</div>
<StackRouter
  on:navigation-start={() => (loading = true)}
  on:navigation-end={() => {
    setTimeout(() => {
      loading = false
    }, 400)
    }
  }
  on:error={(e) =>
    setAlert(
      `Error Details:<br>${e.detail.message}<br>Path: ${e.detail.location}`,
      1
    )}
  on:forbidden={(e) =>
    setAlert(
      `Forbidden Details:<br>${e.detail.message}<br>Path: ${e.detail.location}`,
      1
    )}
  {routes}
  transitionFn={slide(300)}
/>

<style>
</style>
