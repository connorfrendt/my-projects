<template>
  <div id="app">
    <Header />
    <RouterView></RouterView>
  </div>
</template>

<script>
import Home from './components/home/Home.vue';
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer';

export default {
  components: {
    Header
  }
}
</script>

<style>
  body {
    background-color: black;
    color: white;
  }
</style>