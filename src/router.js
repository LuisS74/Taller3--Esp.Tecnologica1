import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProductsListView from './views/ProductsListView.vue'
import ProductsReview from './views/ProductsReview.vue'
import ProductsReview2 from './views/ProductsReview2.vue'
import ProductsReview3 from './views/ProductsReview3.vue'
import UserReview from './views/UserReview.vue'

Vue.use(Router)


export default new Router({
    routes: [
        { path: '/', component: HomeView },
        { path: '/products', component: ProductsListView },
        { path: '/products/647178286edc199bff73e81b/reviews', component: ProductsReview },
        { path: '/products/647178286edc199bff73e81c/reviews', component: ProductsReview2 },
        { path: '/products/647178286edc199bff73e81d/reviews', component: ProductsReview3 },
        { path: '/users/647178286edc199bff73e81f/reviews', component: UserReview }
      ]

})
