<template>
    <div>
        <product-item v-for="product in products" :key="product._id" :product="product">
        </product-item>
    </div>
</template>

<script>
import { listProducts } from "../service/product.service";
import ProductItem from "../components/ProductItem.vue";

export default {
    name: "ProductList",
    components: {
        ProductItem,
    },
    data() {
        return {
            products: [],
        };
    },
    async mounted() {
        const result = await listProducts({ limit: 3, offset: 0 });
        this.products = result;
    },
};
</script>

<style>
</style>