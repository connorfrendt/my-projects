<template>
  <div id='sub-header'>
    <img src='../../assets/connorpic.jpg' />
    <h1 id="optag">Online <br /> Portfolio</h1>
  </div>
</template>

<script>

export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sub-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  text-align: center;
}
img {
  height: 150px;
  border: 2px solid gray;
  border-radius: 250px;
  margin-right: 7.5px;
}
#optag {
  margin-left: 7.5px;
}
</style>
