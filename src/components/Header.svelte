<script>
  import { link } from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'
</script>

<header>
  <a use:link use:active href="/">Home</a>
  <a use:link use:active={'/about'} href="/about">About</a>
</header>

<style lang="scss">
  header {
    display: flex;
    width: 50%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    a {
      font-size: 3rem;
      padding: 0 2rem;
    }
  }

  header :global(a.active) {
    color: red;
  }
</style>
