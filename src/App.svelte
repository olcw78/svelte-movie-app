<script>
  import Header from './components/Header.svelte'
  import Router from 'svelte-spa-router'
  import { pages as routes } from './pages'
</script>

<Header />
<Router {routes} />
