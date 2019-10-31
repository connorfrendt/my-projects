<template>
    <div id="header">
      <RouterLink class="topics" to="/" style="text-decoration: none">HOME</RouterLink>
      <RouterLink class="topics" to="/games" style="text-decoration: none">GAMES</RouterLink>
      <RouterLink class="topics" to="/blogs" style="text-decoration: none">BLOGS</RouterLink>
      <RouterLink class="topics" to="/projects" style="text-decoration: none">PROJECTS</RouterLink>
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
}
.topics:visited {
  color: black;
}
</style>