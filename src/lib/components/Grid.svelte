<script lang="ts">
  
</script>

<div>
  <slot/>
</div>

<style lang="scss">
  div{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    height: calc(100vh - var(--navbar-height));

  }
</style>