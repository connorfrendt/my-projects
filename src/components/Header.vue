<template>
	<div id="flex">
		<div id="games">Games</div>
		<div id="blogs">Blogs</div>
		<div id="projects">Projects</div>
    <!-- <Games />
    <Blogs />
    <Projects /> -->
	</div>
</template>

<script>
export default {
  // components: {
  //   Games,
  //   Blogs,
  //   Projects
  // }
}
</script>

<style>
#flex {
	display: flex;
	justify-content: space-around;
	background: gray;
	padding: 10px;
}
#games {
  border-bottom: 1px solid black;
}
#blogs {
	border-bottom: 1px solid black;
}
#projects {
	border-bottom: 1px solid black;
}
</style>