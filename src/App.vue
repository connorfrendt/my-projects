<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Home from './components/home/Home.vue'
import Header from './components/header/Header.vue'

export default {
  components: {
    Header,
    Home
  }
}
</script>

<style>
  body {
    background-color: black;
    color: white;
  }
</style>