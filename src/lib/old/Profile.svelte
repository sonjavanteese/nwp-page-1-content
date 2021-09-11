<script>
  import {userDb} from "../../stores"
	import {supabase} from "../../supabase"
import { setAlert } from "../nwp-alert";
  import Avatar from './Avatar.svelte'

  let loading = true
  let username = null
  let website = null
  let avatar_url = null

  async function getProfile() {
    try {
      loading = true
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) throw error

      if (data) {
        username = data.username
        website = data.website
        avatar_url = data.avatar_url
      }
    } catch (error) {
      alert(error.message)
    } finally {
      loading = false
    }
  }

  async function updateProfile() {
    try {
      loading = true
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) throw error
    } catch (error) {
      setAlert(`Error Update: ${error.message}`, 1)
    } finally {
      loading = false
    }
  }

  async function signOut() {
    try {
      loading = true
      let { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      setAlert(`Error SignOut:<br>${error.message}`, 1)
    } finally {
      loading = false
    }
    
  }
  
</script>


{#if $userDb}
   <!-- content here -->

<form class="smol-box" use:getProfile on:submit|preventDefault={updateProfile}>
  <div class="flex flex-col lg:flex-row">
  <aside class="flex justify-center py-2 px-4">
  <Avatar bind:path={avatar_url} on:upload={updateProfile} />
  </aside>
  <article class="w-full py-2 px-4">
  <div>
    <label for="email">Email</label>
    <input id="email" type="text" value={$userDb.email} disabled />
  </div>
  <div class="mb-4">
    <label for="username">Name</label>
    <input
      id="username"
      type="text"
      bind:value={username}
    />
  </div>
  <div class="mb-4">
    <label for="website">Website</label>
    <input
      id="website"
      type="url"
      bind:value={website}
    />
  </div>

  <div class="mb-4">
    <input type="submit" class="button block primary" value={loading ? 'Loading ...' : 'Update'} disabled={loading}/>
  </div>

  <div>
    <button type="button" class="button block" on:click={signOut} disabled={loading}>
      Sign Out
    </button>
  </div>
  </article>
  </div>
</form>

{/if}

<style>
.smol-box {
  --color-light: #f6f6f6;
  --color-dark: #444444;
  margin: 2rem auto;
  color: var(--color-dark);
  background-color: var(--color-light);
  font-size: 1.15rem;
  padding: clamp(.75rem, 3%, 2rem);
  /* Provide a max-width and prevent overflow */
  width: min(50rem, 94%);
  word-break: break-word;
  hyphens: auto;
}

.smol-unbreakable-box footer {
  padding: 0.25em 0.5em;
  margin-top: 1rem;
  color: var(--color-light);
  background-color: var(--color-dark);
  font-size: 0.9rem;
  /* Creates a visual box shrunk to `max-content` */
  width: fit-content;
}
</style>