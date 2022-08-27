import Main from './views/Main.svelte'
import Write from './views/Write.svelte'
import Statistics from './views/Statistics.svelte'

interface Routers {
  [x: string]: any
}

const routes: Routers = {
  '/': Main,
  '/write': Write,
  '/stat': Statistics,
}

export default routes
