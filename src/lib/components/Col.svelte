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
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 var(--size);
    text-align: center;
    border-right: 1px solid #000;
    height: 100%;
    &:first-child{
      border-left: 1px solid #000;
    }
    &:hover{
      background-color: pink;
    }
  }
</style>