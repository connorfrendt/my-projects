<template>
  <div id="app">
    <Header />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Header,
    HelloWorld
  }
}
</script>

<style>
  body {
    background-color: black;
    color: white;
  }
</style>