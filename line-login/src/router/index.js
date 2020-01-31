import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import signIn from '../views/signIn.vue'
import signUp from '../views/signUp.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: 'signIn'
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: signIn
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
      //サインインの有無判断
      firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
              next()
          } else {
              next({
                  path: '/signIn'
              })
          }
      })
  } else {
      next()
  }
});

export default router
