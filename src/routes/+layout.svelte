<script>
export let data;
</script>

<svelte:head>
    <link rel="stylesheet" href="/global.css">
    </svelte:head>

    <nav>
        <ul>
            <li>Menu</li>
        </ul>
    </nav>
    <main>
        <slot/>
            </main>

<style lang="scss">
:root {
  --navbar-height: 65px;
}

main {
  padding: var(--padding);
  padding-top: var(--navbar-height);
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  background-color: rgb(65, 33, 80);
  min-height: calc(var(--navbar-height));
}

ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: calc(var(--navbar-height));
  margin: 0;
  padding-left: 20px;
  list-style: none;
}
</style>
