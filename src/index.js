const cache = {
  store: {},
  router: {}
}
export const createStore = (store, module = 'default') => {
  cache.store[module] = store
}
export const useStore = (module = 'default') => {
  return cache.store[module]
}
export const createRouter = (router, module = 'default') => {
  cache.router[module] = router
}
export const useRouter = (module = 'default') => {
  return cache.router[module]
}