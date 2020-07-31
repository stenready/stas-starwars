import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes=[
  {
    path: '/',
    name: 'Peoples',
    component: () => import(/* webpackChunkName: "about" */ '../views/peoples/Peoples.vue')
  },
  {
    path: '/people/:id',
    name: 'people-single',
    component: () => import(/* webpackChunkName: "about" */ '../views/peoples/SinglePeople.vue')
  },
  {
    path: '/starships',
    name: 'Starships',
    component: () => import(/* webpackChunkName: "about" */ '../views/starships/Starships.vue')
  },
  {
    path: '/starships/:id',
    name: 'Starships-single',
    component: () => import(/* webpackChunkName: "about" */ '../views/starships/SingleStarship.vue')
  },
  {
    path: '/films',
    name: 'Films',
    component: () => import(/* webpackChunkName: "about" */ '../views/films/Films.vue')
  },
  {
    path: '/films/:id',
    name: 'single-film',
    component: () => import(/* webpackChunkName: "about" */ '../views/films/SingleFilm.vue')
  },
  {
    path: '/planets',
    name: 'planets',
    component: () => import(/* webpackChunkName: "about" */ '../views/planets/Planets.vue')
  },
  {
    path: '/planets/:id',
    name: 'planet-single',
    component: () => import(/* webpackChunkName: "about" */ '../views/planets/SinglePlanet.vue')
  },
]

const router=new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
