import { createRouter, createWebHashHistory } from 'vue-router';

import ProductList from './pages/ProductList';
<<<<<<< HEAD
import UserView from './pages/UserView'

const routes = [
  {
    name: 'productlist',
    path: '/',
    component: ProductList,
  },
  {
    name: 'userview',
    path: '/user/:userid',
    component: UserView,
    props: true
  }
=======
import ProductReview from './pages/ProductReview'

const routes = [
    {
        name: 'productlist',
        path: '/',
        component: ProductList,
    },
    {
        name: 'product-reviews',
        path: '/products/:id/reviews',
        component: ProductReview,
        props: true,
    }
>>>>>>> cesar
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
