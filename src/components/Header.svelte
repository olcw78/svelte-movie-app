<script>
  import { link } from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'
  import Logo from './Logo.svelte'
</script>

<header>
  <Logo />
  <a use:link use:active href="/">Home</a>
  <a use:link use:active={'/about'} href="/about">About</a>
</header>

<style lang="scss">
  header :global(a.active) {
    color: red;
  }
</style>
