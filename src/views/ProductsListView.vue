<template>
    <div>
      <h2>Lista</h2>
     
        <li v-for="product in products" :key="product._id">
          <p><strong>Nombre:</strong> {{ product.name }}</p>
          <p><strong>Precio:</strong> {{ product.price }}</p>
          <p><strong>Imagen:</strong> {{ product.images }}</p>
          <!-- <div v-for="image in product.images" :key="image">
<img :src="image" alt="">
          </div > -->
          <div v-for="image in product.images" :key="image">
<img :src="image" alt="">
          </div >

          <p><strong>Descripcion:</strong> {{ product.description }}</p>
        </li>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'ProductsListView',
    data() {
      return {
        products: []
      }
    },
    mounted() {
      this.fetchProducts()
    },
    methods: {
      fetchProducts() {
        axios.get('http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/products')
          .then(response => {
            this.products = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  </script>
  