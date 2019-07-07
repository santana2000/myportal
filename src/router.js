import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Hello from './components/Hello.vue'
import Demos from './components/Demos.vue'
import Maps from './components/Maps.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: 'hello',
          
          component: Hello
        },
        {
          path: 'about',
          
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
        },
        {
          path: 'demos',
           
          component: Demos
        },
        {
          path: 'maps',
          name: 'maps',
          component: Maps
        }
      ]
    },
    {
      path: '/*',
      redirect: '/home/hello'
    },
  ]
})

  // {
    //   path: '/hello',
    //   name: 'hello',
    //   component: Hello
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
    // },
    // {
    //   path: '/demos',
    //   name: 'demos',
    //   component: Demos
    // },
    // {
    //   path: '/maps',
    //   name: 'maps',
    //   component: Maps
    // },