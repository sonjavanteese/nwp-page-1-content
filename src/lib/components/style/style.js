export function styles(node, styles) {
   setCustomProperties(node, styles)

   return {
       update(styles) {
           setCustomProperties(node, styles)
       }
   };
}

function setCustomProperties(node, styles) {
   Object.entries(styles).forEach(([key, value]) => {
       node.style.setProperty(`--${key}`, value)
   })
}


/* 
<script>import { styles } from './styles.js'
	export let color = "pink";
</script>

<style>h1 {
		color: var(--color);
	}
</style>

<h1 use:styles={{ color: color }}>
	Child color is {color}
</h1>
*/