<template>
  <div>
    <button id="back">
      <RouterLink id="link" to="/games">
        <img id="img" src="../../assets/back-arrow.png" height=35px/>
      </RouterLink>
    </button>
    
    <button id="toon" @click="searchToon">CLICK HERE</button>
    <div>WOW</div>
  </div>
</template>

<script>
import wowCharApi from '../services/wowCharApi.js';

export default {
  methods: {
    searchToon() {
      wowCharApi.getToon()
        .then(response => {
          const charName = response.character.name;
          const charRace = response.playable_race.name;
          const charClass = response.playable_class.name;
          console.log(response.character.name,'the', response.playable_race.name, response.playable_class.name);
        })
    }
  },
  create() {
    this.searchToon();
  }
}
</script>

<style>
  #back {
    padding: 0;
    margin: 0;
    border-radius: 5px;
    background-color: gray;
  }
  #toon {
    background: green;
  }
</style>