<template>
  <div>
        <p>(Se necesita actualizar la página para ver cambios, por alguna razón)</p>
        <router-link :to="{ name:'userview', params: { userid: '647178286edc199bff73e81f' }}">Juan Santos</router-link>
        &nbsp;
        <router-link :to="{ name:'userview', params: { userid: '647178286edc199bff73e81e' }}">Alexis Sanchez</router-link>
        &nbsp;
        <router-link :to="{ name:'userview', params: { userid: '647178286edc199bff73e820' }}">Rayo McQueen</router-link>

  </div>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
