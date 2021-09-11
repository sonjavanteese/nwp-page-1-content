<script>
   import goback from './back1.svg'
   export let title;
   export let categorie;
   export let date;
 </script>
 
<div class="section py-4">
  <a href="javascript:history.back()" class="btn btn-light btn-lg back-link"><img src={goback} class="me-2"> Back</a>  
</div>
 <section class="section py-4">
     <header class="header">
      <h1>{ title }</h1>
      <p class="date">on: { date }</p>
      <p class="date">Kategorie: { categorie }</p>
   </header>
   <slot>
      <!-- the mdsvex content will be slotted in here -->
   </slot>
</section>

<style>
.header {
   padding: 1rem 0;
}
.section {
   padding: 0 clamp(1rem, 5%, 2rem);
}
.back-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}
</style>