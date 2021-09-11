<script>
import Avatar from './comp/user-avatar.svelte';
import {
   supabase,
   userData,
   userObj
} from "./supabase";
import {
   setAlert
} from "../../lib/components/nwp-alert/alert.svelte";
const user = supabase.auth.user()
const handleSubmit = (e) => {
   console.log(e)
}

let loading = true
let username = null
let website = null
let avatar_url = null
let img_url = null

async function getProfile() {
   try {
      loading = true
      const user = supabase.auth.user()

      let {
         data,
         error,
         status
      } = await supabase
         .from('profiles')
         .select(`username, website, avatar_url, img_url`)
         .eq('id', user.id)
         .single()

      if (error && status !== 406) throw error

      if (data) {
         username = data.username
         website = data.website
         avatar_url = data.avatar_url
         img_url = data.img_url
         userData.set(data)
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

      let {
         error
      } = await supabase.from('profiles').upsert(updates, {
         returning: 'minimal', // Don't return the value after inserting
      })

      if (error) throw error
   } catch (error) {
      // setAlert(`Error Update: ${error.message}`, 1)
      alert(`Error Update: ${error.message}`, 1)
   } finally {
      loading = false
   }
}

async function signOut() {
   try {
      loading = true
      let {
         error
      } = await supabase.auth.signOut()
      if (error) throw error
   } catch (error) {
      setAlert(`Error SignOut:<br>${error.message}`, 1)
   } finally {
      loading = false
   }

}
</script>

<section class="max-w-lg mx-auto py-4">
    <section class="bg-gray-50 p-8 text-gray-500">
        <div class="container mx-auto px-4">
            <form use:getProfile on:submit|preventDefault="{handleSubmit}">
                <div>
                    <Avatar bind:path={avatar_url} size="4rem" on:upload={updateProfile} />
                </div>
                <div class="mb-2">
                    <input bind:value={username} type="text" class="appearance-none border-2 border-blue-100 focus:shadow-lg outline-none px-5 py-3 w-full" placeholder="Username"/>
                </div>
                <div class="mb-2">
                    <input bind:value={website} type="url" class="appearance-none border-2 border-blue-100 focus:shadow-lg outline-none px-5 py-3 w-full" placeholder="https://"/>
                </div>
                <div class="mb-2">
                    <input bind:value={img_url} type="url" class="appearance-none border-2 border-blue-100 focus:shadow-lg outline-none px-5 py-3 w-full" placeholder="https://"/>
                </div>
                <button type="button" on:click={signOut} class="bg-red-800 font-medium hover:bg-red-700 inline-block mb-2 p-3 text-center text-white uppercase w-full">Logout</button>
                <button type="submit" class="bg-gray-400 font-medium hover:bg-gray-500 inline-block p-3 text-center text-white uppercase w-full">Update</button>
            </form>
        </div>
    </section>
</section>

<style>
input[type='url'] {
   color: #cccccc;
   font-size: 0.8rem;
}

input[type='url']:focus {
   color: #333333;
   font-size: 0.9rem;
}
</style>
