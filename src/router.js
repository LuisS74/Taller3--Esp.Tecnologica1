import { createRouter, createWebHashHistory } from 'vue-router';

import ProductList from './pages/ProductList';
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
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
