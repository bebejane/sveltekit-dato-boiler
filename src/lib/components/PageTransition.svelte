<!-- PageTransition.svelte -->
<script>
  import { fade, } from "svelte/transition";
  export let url = '';
  const pageTransitionDuration = 1000;
  let path = '';
  $: path = url;

</script>

{#key path}
  <div in:fade={{  duration: pageTransitionDuration, delay: pageTransitionDuration }}
       out:fade={{ duration: pageTransitionDuration }}>
    <slot />
  </div>
{/key}