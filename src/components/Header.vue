<template>
	<div id="header">
    <header>
      <nav>
        <RouterLink to="/games">Games</RouterLink>
        <div id="blogs">Blogs</div>
        <div id="projects">Projects</div>
      </nav>
    </header>
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
  border-bottom: 1px solid black;
}
#blogs {
	border-bottom: 1px solid black;
}
#projects {
	border-bottom: 1px solid black;
}
</style>