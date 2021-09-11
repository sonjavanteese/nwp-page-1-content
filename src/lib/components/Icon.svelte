<script context="module">
  
</script>

<script>
    export let name = "html5";
    export let size = null;
    let style = null;
    if (size) {
      style = `font-size: ${size};`;
    }
</script>

<style>
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
.icon-large {
  width: 1.5em;
  height: 1.5em;
}
</style>

<svg class="icon nwp-{name}" {style} {...$$restProps}>
    <use xlink:href="#nwp-{name}"></use>
</svg>

