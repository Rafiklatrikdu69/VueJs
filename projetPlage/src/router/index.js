import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from "../views/DestinationView.vue"
import NotFoundView from "../views/NotFoundView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
   {
      path: '/destination/:id', 
      name: 'destination', 
      props: true,
      component: DestinationView
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
  
      component: NotFoundView
    }
  ]
})

export default router
