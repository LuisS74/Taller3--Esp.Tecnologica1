<template>
  <div>
        <router-link :to="{ name:'userview', params: { userid: '647178286edc199bff73e81f' }}">AAAA</router-link>
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
