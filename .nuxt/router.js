import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5fefc6e1 = () => interopDefault(import('..\\pages\\call.vue' /* webpackChunkName: "pages/call" */))
const _ab5f10c4 = () => interopDefault(import('..\\pages\\landing\\index.vue' /* webpackChunkName: "pages/landing/index" */))
const _57de46d4 = () => interopDefault(import('..\\pages\\OLD.vue' /* webpackChunkName: "pages/OLD" */))
const _e9bbece2 = () => interopDefault(import('..\\pages\\landing\\it.vue' /* webpackChunkName: "pages/landing/it" */))
const _1ea7db28 = () => interopDefault(import('..\\pages\\_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/call",
    component: _5fefc6e1,
    name: "call"
  }, {
    path: "/landing",
    component: _ab5f10c4,
    name: "landing"
  }, {
    path: "/OLD",
    component: _57de46d4,
    name: "OLD"
  }, {
    path: "/landing/it",
    component: _e9bbece2,
    name: "landing-it"
  }, {
    path: "/*",
    component: _1ea7db28,
    name: "all"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
