<template>
    <div id="header">
      <RouterLink id="games" to="/games">Games</RouterLink>
      <div id="blogs">Blogs</div>
      <div id="projects">Projects</div>
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
	padding: 10px;
}
#games {
  border: 1px solid black;
}
#blogs {
	border: 1px solid black;
}
#projects {
	border: 1px solid black;
}
</style>