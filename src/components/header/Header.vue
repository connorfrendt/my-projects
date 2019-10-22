<template>
    <div id="header">
      <RouterLink id="home" to="/">Home</RouterLink>
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
#home {
  border: 1px solid black;
  padding: 10px;
}
#games {
  
  padding: 10px;
  background-color: white;
}
#games:hover {
  background-color: gray;
  
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