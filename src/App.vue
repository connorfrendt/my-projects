<template>
  <div id="app">
    <Header />
    <RouterView></RouterView>
    <Footer />
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  /* #app {
    height: 100vh;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-rows: 200px 1fr 50px;
  } */
  
  body {
    background-color: black;
    color: white;
  }
</style>