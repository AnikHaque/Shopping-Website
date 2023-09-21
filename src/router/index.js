import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import ProductList from '../components/ProductList.vue'
import ProductDetails from '../components/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/product-list',
      name: 'product-list',
      component: ProductList
    },
    {
      path: '/product-list/:id',
      name: 'product-details',
      component: ProductDetails
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

export default router
