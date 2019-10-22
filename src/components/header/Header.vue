<template>
    <div id="header">
      <RouterLink id="home" to="/">Home</RouterLink>
      <RouterLink id="games" to="/games">Games</RouterLink>
      <RouterLink id="blogs" to="/blogs">Blogs</RouterLink>
      <RouterLink id="projects" to="/projects">Projects</RouterLink>
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
  border-radius: 5px;
}
#home {
  border: 1px solid black;
  padding: 10px;
}
#games {
  padding: 10px;
  background-color: gray;
  border: 1px solid black;
}
#games:hover {
  background-color: darkgray;
  color: white;
}

#blogs {
	border: 1px solid black;
  padding: 10px;
}

#projects {
	border: 1px solid black;
  padding: 10px;
}
</style>