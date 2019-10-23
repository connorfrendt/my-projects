<template>
  <div id="grid">
    <!-- Eventually, these will be links -->
    <div class="blog">Blog 1</div>
    <div class="blog">Blog 2</div>
    <div class="blog">Blog 3</div>
    <div class="blog">Blog 4</div>
    <div class="blog">Blog 5</div>
    <div class="blog">Blog 6</div>
    <div class="blog">Blog 7</div>
    <div class="blog">Blog 8</div>
    <div class="blog">Blog 9</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(33.3%, 1fr));
}

.blog {
  padding: 50px 10px;
  background-color: maroon;
  margin: 10px;
  border-radius: 5px;
}
</style>