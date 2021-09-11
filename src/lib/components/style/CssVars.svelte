<script>
  export let cssVars;

  $: style = Object.entries(cssVars)
    .map(([key, value]) => `${key}:${value}`)
    .join(";");
</script>

<div style="display: contents; {style}">
  <slot />
</div>

<!--
<script>
   import Style from './Style.svelte'
   // const cssVars = {
   // 	'--color': '#D00'
   // }
   export let cssVars = {}
   </script>
   
   <Style { cssVars }>
      <p>My Component</p>
   </Style>
   
   <style>
      p {
         color: var(--color, #444);
      }
   </style>
   
-->
