<script>
  export let width = 20;
  export let height = width;
  export let bi = '';
  export let fill = 'currentColor';
</script>

<style>
  svg {
    @apply inline-block;
  }
</style>

<svg class="bi" width="{width}" height="{height}" fill="{fill}">
  <use xlink:href="bootstrap-icons.svg#{bi}"></use>
</svg>
