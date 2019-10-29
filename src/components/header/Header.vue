<template>
    <div id="header">
      <RouterLink id="home" to="/" style="text-decoration: none">Home</RouterLink>
      <RouterLink id="games" to="/games" style="text-decoration: none">Games</RouterLink>
      <RouterLink id="blogs" to="/blogs" style="text-decoration: none">Blogs</RouterLink>
      <RouterLink id="projects" to="/projects" style="text-decoration: none">Projects</RouterLink>
      <!-- <button @click="sendEmail">Send Email</button> -->
    </div>
</template>

<script>
export default {
  // methods: {
  //   sendEmail() {
  //     window.open('mailto:hcgcustomersupport@harman.com?subject=Moderated Image Content&body=Purchase Order Number: ' + '\r\n' + 'Moderation Status: Cancelled');
  //   }
  // }
}
</script>

<style>
#header {
	display: flex;
  justify-content: space-around;
	background: gray;
  text-align: center;
}
#home {
  width: 100%;
  padding: 10px;
}
#home:hover {
  background-color: darkgray;
}

#games {
  width: 100%;
  padding: 10px;
  border-left: 1px solid black;
}
#games:hover {
  background-color: darkgray;
}

#blogs {
  width: 100%;
  padding: 10px;
	border-left: 1px solid black;
}
#blogs:hover {
  background-color: darkgray;
}

#projects {
  width: 100%;
  padding: 10px;
	border-left: 1px solid black;
}
#projects:hover {
  background-color: darkgrey;
}
</style>