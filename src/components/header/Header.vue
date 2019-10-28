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
	background: gray;
	padding: 10px;
}
#home {
  border: 1px solid black;
  padding: 10px;
}
#home:hover {
  background-color: darkgray;
}

#games {
  padding: 10px;
  background-color: gray;
  border: 1px solid black;
}
#games:hover {
  background-color: darkgray;
}

#blogs {
	border: 1px solid black;
  padding: 10px;
}
#blogs:hover {
  background-color: darkgray;
}

#projects {
	border: 1px solid black;
  padding: 10px;
}
#projects:hover {
  background-color: darkgrey;
}
</style>