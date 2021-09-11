<script>
  // import {userDb} from "../../stores"
	import {supabase} from "../../supabase"
  import {setAlert} from '../nwp-alert'
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
    email = 'sonjavanteese@gmail.com'
    password ='hoerzu36'
  };
</script>
<div>
  <form id="form1" on:submit|preventDefault="{handleLogin}">
      <div>
          <input class="inputField" type="email" placeholder="Your email" bind:value="{email}" />
      </div>
      <div>
          <input class="inputField" type="password" placeholder="Your Password" bind:value="{password}" />
      </div>
      <div class="mb-2">
          <input type="submit" class='button block primary' value={loading ? "Loading" : "Login"} disabled={loading} />
      </div>
      <div>
          <input type="button" class="button block" value="Set" on:click="{setFormData}" disabled="{loading}" />
      </div>
  </form>
</div>


<style>
  #form1 {
    width: 100%;
    max-width: 420px;
    padding: 1rem;
    margin: 1rem auto;
  }
  [type='text'], [type='email'], [type='number'], [type='email'], [type='button'], [type='submit'] {
    margin: 0 0 0.5rem 0;
    padding: 0.75rem 1rem;
  }
  [type='button'], [type='submit'] {
    cursor: pointer;
  }

  .smol-box {
    --color-light: #ffffff;
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