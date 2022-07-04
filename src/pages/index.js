import { wrap } from 'svelte-spa-router/wrap'

import Home from './Home.svelte'
import _404 from './404.svelte'
import Loading from './Loading.svelte'

export const pages = {
  '/': Home,

  '/about': wrap({
    asyncComponent: () => import('./About.svelte'),
    loadingComponent: Loading,
    loadingParams: {
      message: 'loading About...',
      foo: 'bar'
    }
  }),

  '*': _404
}
