<template>
    <div>
      <h1>Lista </h1>
      <button @click="goToProductsList">Ver listas</button>
      <button @click="goToProductsReview">Ver reviews1</button>
      <button @click="goToProductsReview2">Ver reviews2</button>
      <button @click="goToProductsReview3">Ver reviews3</button>
      

    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
    methods: {
      goToProductsList() {
        this.$router.push('/products')
      },
      goToProductsReview() {
        this.$router.push('/products/647178286edc199bff73e81b/reviews')
      },
      goToProductsReview2() {
        this.$router.push('/products/647178286edc199bff73e81c/reviews')
      },
      goToProductsReview3() {
        this.$router.push('/products/647178286edc199bff73e81d/reviews')
      }
      
      
      
    }
    
  }
  </script>
  
  