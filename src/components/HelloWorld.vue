<template>
  <div id='sub-header'>
    <img src='../assets/connorpic.jpg' />
    <h1>Welcome to my Vue.js App</h1>
    <HelloChild />  
  </div>
</template>

<script>
import HelloChild from './HelloChild'

export default {
  components: {
    HelloChild
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
