<template>
  <div>
    <button id="back">
      <RouterLink id="link" to="/games">
        <img id="img" src="../../assets/back-arrow.png" height=35px/>
      </RouterLink>
    </button>
    
    <div>
      {{ toonName }}, the {{ toonRace }} {{ toonSpec }} {{ toonClass }}, champion of the {{ toonFaction }}!
    </div>
    <img :src="getToonBust"/>
    <img :src="getToonAvatar"/><br />
    <img :src="getToonFull" />
  </div>
</template>

<script>
import wowCharApi from '../services/wowCharApi';

export default {
  data() {
    return {
      toonName: '',
      toonFaction: '',
      toonRace: '',
      toonSpec: '',
      toonClass: '',
      toonImg: '',
      getToonBust: '',
      getToonAvatar: '',
      getToonFull: ''
    }
  },
  created() {
    wowCharApi.getToon()
      .then(res => {
        this.toonName = res.character.name;
        this.toonFaction = res.faction.name;
        this.toonSpec = res.active_spec.name;
        this.toonRace = res.playable_race.name;
        this.toonClass = res.playable_class.name;
      });
    wowCharApi.getToonImages()
      .then(res => {
        console.log(res);
        this.getToonBust = res.bust_url;
        this.getToonAvatar = res.avatar_url;
        this.getToonFull = res.render_url;
      })
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