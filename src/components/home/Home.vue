<template>
  <div id='sub-header'>
    <img src='../../assets/connorpic.jpg' />
    <h1>Welcome to my Vue.js App</h1>
    <HomeChild />  
  </div>
</template>

<script>
import HomeChild from './HomeChild'

export default {
  components: {
    HomeChild
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sub-header {
  padding-top: 20px;
  text-align: center;
}
img {
  height: 150px;
  border: 2px solid gray;
  border-radius: 250px;
}
</style>
