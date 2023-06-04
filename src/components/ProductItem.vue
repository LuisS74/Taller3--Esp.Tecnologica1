<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-md-4 col-sm-6">
      <div class="card mb-3">
        <p class="created-at">Creado en: {{ product.createdAt }}</p>
        <p class="user-city">{{ product.user.city }}</p>
        <div class="d-flex justify-content-center align-items-center">
          <img :src="product.images[0]" class="card-img-top img-fluid" :style="{ width: '200px', height: '200px' }" alt="">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text">${{ product.price }}</p>
          <div v-if="showButton" class="btn btn-primary" @click="showReview(product)">
            Ver Reviews
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      default: null,
    },
    showButton: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    showReview(product) {
      const productId = product._id;
      this.$router.push({
        name: "product-reviews",
        params: {
          id: productId,
        },
      });
    },
  },
};
</script>

<style>
.created-at,
.user-city {
  font-size: 14px;
  color: gray;
  margin-bottom: 5px;
}

.card-body {
  background-color: #f8f9fa;
  padding: 10px;
}
</style>

