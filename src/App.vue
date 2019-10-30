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
  body {
    background-color: black;
    color: white;
  }
</style>