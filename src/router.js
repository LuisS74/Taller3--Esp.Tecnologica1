import { createRouter, createWebHashHistory } from 'vue-router';

import ProductList from './pages/ProductList';
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
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
