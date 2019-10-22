<template>
  <div id="app">
    <Header />
    <Home />
    <Footer />
    <router-view
  </div>
</template>

<script>
import Home from './components/home/Home.vue';
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer';

export default {
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<style>
  body {
    background-color: black;
    color: white;
  }
</style>