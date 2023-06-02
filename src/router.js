import { createRouter, createWebHashHistory } from 'vue-router';

import ProductList from './pages/ProductList';
import ProductView from './pages/ProductView';

const routes = [
  {
    name: 'productlist',
    path: '/',
    component: ProductList,
  },
  {
    name: 'productview',
    path: '/a',
    component: ProductView
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
