<script>
    import { setAlert } from "../../lib/components/nwp-alert/alert.svelte";
    import { supabase, userData, userObj } from "./supabase";
    // const user = supabase.auth.user()
    
    let loading = false
    let email, password;

  const handleLogin = async () => {
    try {
      loading = true
      const { error } = await supabase.auth.signIn({ email, password })
      if (error) throw error
      setAlert('Succeed! You are Signed In!', 2)
    } catch (error) {
      setAlert(`Error Login:<br>${error.error_description || error.message}`, 1)
    } finally {
      loading = false
    }
  }
  const setFormData = () => {
    email = ''
    password =''
  }
</script>
  
<section class="max-w-lg mx-auto py-4">
   <section class="bg-gray-50 p-8 text-gray-500">
       <div class="container mx-auto px-4">
           <form on:submit|preventDefault="{handleLogin}">                  
               <div class="mb-2"> 
                   <input bind:value={email} class="appearance-none border-2 border-blue-100 focus:shadow-lg outline-none px-5 py-3 w-full" placeholder="Enter email..." type="email" name="email"/> 
               </div>
               <div class="mb-6"> 
                   <input bind:value={password} class="appearance-none border-2 border-blue-100 focus:shadow-lg outline-none px-5 py-3 w-full" placeholder="Password" type="password" name="password"/> 
               </div>                                  
               <button type="submit" class="bg-blue-600 font-medium hover:bg-blue-700 inline-block mb-2 p-3 text-center text-white uppercase w-full" value="Login">Submit</button>
               <button on:click={setFormData} type="button" class="bg-gray-400 font-medium hover:bg-gray-500 inline-block p-3 text-center text-white uppercase w-full">Cancel</button>                 
           </form>             
       </div>
   </section>
</section>  
  
<style>

</style>
  

