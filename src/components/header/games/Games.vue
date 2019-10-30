<template>
  <div>
    <h3>World of Warcraft</h3>
    <button @click="searchToon"></button>
    <!-- <h3>Minecraft</h3>
    <h3>Hearthstone</h3>
    <h3>Pokemon</h3> -->
  </div>
</template>

<script>
import axios from 'axios'
import wowCharApi from '../../services/wowCharApi.js';

export default {
  methods: {
    searchToon() {
      wowCharApi.getToon()
        .then(response => {
          console.log('RESULTS HERE', response.playable_race.name);
        })
    }
  },
  create() {
    this.searchToon();
  }
}
</script>

<style>

</style>