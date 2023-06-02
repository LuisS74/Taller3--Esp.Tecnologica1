<template>
    <div>
      <h2>Lista</h2>
     
        <li v-for="user in users" :key="user._id">
          <p><strong>Nombre:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email}}</p>
          <p><strong>Imagen:</strong> {{ user.photo }}</p>
          <p><strong>Biografia:</strong> {{ user.bio }}</p>
          <p><strong>Ciudad:</strong> {{ user.city }}</p>
          

        </li>



      
    </div>
  </template>


<script>
import axios from 'axios'

export default {
  name: 'UserReview',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      axios.get('http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/users/647178286edc199bff73e81f/reviews')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>