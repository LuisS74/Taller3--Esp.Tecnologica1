<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="#" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                </li>
          
            </ul>
          
        </div>
    </nav>
    
   
    <li v-for="product in products" :key="product._id">
      <div class="card" style="width: 200px; position:absolute; right: 100px;">
<div v-if="product.user">
  <img :src="product.user.photo" alt="" height="100px" style="border: 1px solid black; border-radius: 50%;">
        </div >
<div class="card-body" v-if="product.user">
  <p class="card-text"><strong>Nombre de usuario:</strong> {{ product.user.name }}</p>
    <p class="card-text"><strong>Ciudad:</strong> {{ product.user.city }}</p>
    <button type="button" class="btn btn-primary">Perfil</button>
</div>

      </div>
      
   
   
    <div v-if="product.user">
      

      <div class="card" style="width: 480px; left: 100px;" >
<div v-for="(image, index) in product.images" :key="index">
          <img class: card-image-top v-if="index === 0" :src="image" alt="" height="350px">
        </div >
<div class="card-body" v-for="product in products" :key="product._id">
  <p class="card-text" v-if="product.name"><strong>Nombre:</strong> {{ product.name }}</p>
    <p class="card-text" v-if="product.price"><strong>Precio:</strong> {{ product.price }}</p>
    <p class="card-text" v-if="product.description"><strong>Descripcion:</strong> {{ product.description }}</p>
</div>
</div>

<br>

<div class="card mb-3" style="max-width: 540px; left: 400px;">
  <div class="row g-0">
    <div class="col-md-4">
      <div v-if="product.user">
    <img :src="product.user.photo" alt="" height="100px">
          </div >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-text">{{ product.user.name }}</h5>
        <p class="card-text">buen precio</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

<br>
<div class="card mb-3" style="max-width: 540px; left: 400px;">
  <div class="row g-0">
    <div class="col-md-4">
      <div v-if="product.user">
    <img :src="product.user.photo" alt="" height="100px">
          </div >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-text">{{ product.user.name }}</h5>
        <p class="card-text">buenisimo</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      
    </div>
    
  </li>

    
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'ProductsReview',
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
      axios.get('http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/products/647178286edc199bff73e81b/reviews')
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
