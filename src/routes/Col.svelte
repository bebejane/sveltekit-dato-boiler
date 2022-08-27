<script lang="ts">
  export let label = '';
  export let size : `${number}%` = '100%';
</script>
<div style:--size={size}>
  {label}
</div>

<style lang="scss">
  div{
    --size: 100%;
    flex: 0 0 var(--size);
    text-align: center;
  }
</style>