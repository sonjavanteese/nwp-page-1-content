<script>
  import Navbar from "../../lib/appbar/navbar.svelte";
  const nav = [
    ["Start", "/", "start", true],
    ["Archiv", "/archiv", "archiv", true],
    ["Studio", "/studio", "studio", true],
    ["User", "/user", "user", true]
  ];
</script>

<section class="page">
  <Navbar parker navData={nav} />
  <slot name="header" />
  <div class="scroll">
   <slot><!-- ++++ <SLOT/> ++++ --></slot>
  </div>
  <slot name="footer" />
</section>

<style>
  :global(.page) {
    position: absolute;
    bottom: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  :global(.page .content) {
    /* padding: 1.5rem clamp(1rem, 4%, 2rem); */
   @apply max-w-4xl mx-auto px-4 py-6; 
  }
  :global(.page > .scroll) {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
