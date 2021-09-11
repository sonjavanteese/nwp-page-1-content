<script>
  import { supabase } from "../supabase";

  import { createEventDispatcher } from 'svelte';

  export let path;
  export let size = "1px"
  let uploading = false
  let style;
  let src;
  let files;

  const dispatch = createEventDispatcher();

  async function downloadImage() {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path)
      if (error) throw error
      src = URL.createObjectURL(data)
      style = `background-image: url(${src})`;
    } catch (error) {
      console.error('Error downloading image: ', error.message)
    }
  }

  async function uploadAvatar() {
    try {
      uploading = true

      if (!files || files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (uploadError) throw uploadError
      
      path = filePath
      dispatch('upload')
    } catch (error) {
      setAlert(`Error message:<br>${error.message}`, 1)
    } finally {
      uploading = false
    }
  }
</script>



{#if supabase.auth.user()}
    <div class="grid flex-col justify-center items-center pb-8">
    <section>
      <div class="rounded-full border">
        {#if path}
        <img use:downloadImage {src} class="hidden" />
        {/if}
        <div class="grid place-content-center w-48 h-48 bg-no-repeat bg-cover" style={style ? style : ''}>
          <label class="flex items-center px-2">
            <input 
            class="hidden" 
            type="file" 
            placeholder="Choose file.." 
            name="Choose file"
            style="visibility: hidden; position:absolute;"
            id="single"
            accept="image/*"
            bind:files
            on:change={uploadAvatar}
            disabled={uploading}>
            <div class="mx-auto p-0 rounded text-sm bg-black text-white shadow bg-light-50">{uploading ? 'Uploading ...' : 'Upload'}</div>
          </label>
        </div>
      </div>
    </section>
  </div>


<!--       {#if path}
        <img use:downloadImage
          {src}
          alt="Avatar"
          class="avatar image"
          style="height: {size}; width: {size};"
        />
      {:else}
        <div class="avatar no-image" style="height: {size}; width: {size};" />
      {/if} -->
      
<!--       <div>
        <label class="button primary block" for="single">


          {uploading ? 'Uploading ...' : 'Upload'}





        </label>
        <input
          style="visibility: hidden; position:absolute;"
          type="file"
          id="single"
          accept="image/*"
          bind:files
          on:change={uploadAvatar}
          disabled={uploading}
        /> </div> -->
     
   

{:else}
<div class="avatar no-image" style="height: {size}; width: {size};" />
{/if}

