<template>
  <div>
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

</style>
