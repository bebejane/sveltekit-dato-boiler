<script lang="ts">
  
</script>
<div>
  <slot/>
</div>

<style lang="scss">
  div{
		display: flex;
		flex-direction: row;
		align-items: center;
		width:100%;
		border-bottom: 1px solid #000;
		&:first-child{
			border-top: 1px solid #000;
		}
  }
</style>