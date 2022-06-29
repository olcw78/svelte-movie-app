<script>
  import Header from './components/Header.svelte'
  import Router from 'svelte-spa-router'
  import { routes } from './pages'
</script>

<Header />
<Router {routes} />


<style lang="scss"></style>