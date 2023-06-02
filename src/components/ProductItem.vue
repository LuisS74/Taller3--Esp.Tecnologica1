<template>
    <div @click="showDetails(products)">
      {{ products.name }}
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductItem",
    props: {
      bird: {
        type: Object,
        default: null,
      },
    },
    methods: {
      showDetails(products) {
        const productId = products._uid;
        this.$router.push({
          name: "products_details",
          params: {
            id: productId,
          },
        });
      },
    },
  };
  </script>
  
  <style>
  </style>