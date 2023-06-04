<template>
    <div>
        <div v-if="product" class="d-flex flex-row">
            <div class="flex-grow-1">
                <product-item :product="product" :show-button="false"/><br>
            </div>
            <div class="custom-product-details">
                <img :src="product.user.photo" class="img-fluid rounded-circle" :style="{ width: '200px', height: '200px' }"
                    alt="">
                <div>{{ product.user.name }}</div>
                <div>{{ product.user.city }}</div>
                <router-link :to="`/user/${product.user._id}`" class="btn btn-primary">Ver perfil</router-link>
            </div>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
        <h3>Reseñas del producto ({{ reviews.length }})</h3><br>
        <review-item v-for="review in reviews" :key="review._id" :review="review" />
    </div>
</template>
  
<script>
import { getDetailsProduct } from '../service/product.service';
import ProductItem from '../components/ProductItem.vue';
import ReviewItem from '../components/ReviewItem.vue';

export default {
    name: 'ProductReview',
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    components: {
        ProductItem,
        ReviewItem,
    },
    data() {
        return {
            product: null,
            reviews: [],
        };
    },
    created() {
        this.fetchProductDetails();
    },
    methods: {
        async fetchProductDetails() {
            const { product, reviews } = await getDetailsProduct(this.id);
            this.product = product;
            this.reviews = reviews;
        },
    },
};
</script>
  
<style>
.rounded-circle {
    border-radius: 50%;
}

.custom-product-details {
    margin-right: 350px;
}
</style>
  