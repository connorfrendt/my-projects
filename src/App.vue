<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'

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