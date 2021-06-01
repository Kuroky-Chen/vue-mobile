import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Auth from '@okta/okta-vue'
import setting from '@/settings'

Vue.use(Auth, {
  issuer: setting.okta.issuer,
  client_id: setting.okta.client_id,
  redirect_uri: window.location.origin + setting.okta.authPath,
  scope: 'openid profile email',
  postLogoutRedirectUri: window.location.origin + setting.okta.logoutRedirect
})

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: setting.okta.authPath,
      component: Auth.handleCallback(),
      hidden: true
    }
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
