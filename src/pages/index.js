import { wrap } from 'svelte-spa-router/wrap'

import Home from './Home.svelte'
import _404 from './404.svelte'

export const routes = {
  '/': Home,

  '/about': wrap({
    asyncComponent: () => import('./About.svelte')
  }),

  '*': _404
}
