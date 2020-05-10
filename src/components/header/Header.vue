<template>
    <div id="header">
      <RouterLink class="topics" to="/" style="text-decoration: none">Home</RouterLink>
      <!-- <RouterLink class="topics" to="/games" style="text-decoration: none">GAMES</RouterLink> -->
      <RouterLink class="topics" to="/resume" style="text-decoration: none">Skills & Technologies</RouterLink>
      <RouterLink class="topics" to="/projects" style="text-decoration: none">Projects</RouterLink>
      <RouterLink class="topics" to="/blogs" style="text-decoration: none">Blogs</RouterLink>
    </div>
</template>

<script>
export default {

}
</script>

<style>
  #header {
	display: flex;
  justify-content: space-around;
	background: gray;
  text-align: center;
}

.topics{
  width: 100%;
  padding: 10px;
}
.topics:hover {
  background-color: darkgray;
  transition: 0.5s;
}
.topics:visited {
  color: black;
}
</style>