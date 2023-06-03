import { createRouter, createWebHashHistory } from 'vue-router';

import ProductList from './pages/ProductList';


const routes = [
    {
        name: 'productlist',
        path: '/',
        component: ProductList,
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
