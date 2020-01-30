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
    <img :src="toonBust"/>
    <img :src="toonAvatar"/><br />
    <img :src="toonFull" style="height: 300px"/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      toon: [],
      toonImgs: [],
      toonName: '',
      toonFaction: '',
      toonRace: '',
      toonSpec: '',
      toonClass: '',
      toonBust: '',
      toonAvatar: '',
      toonFull: '',
      token: ''
    }
  },
  methods: {
    getToon() {
      axios
        .get(process.env.VUE_APP_GET_TOON)
        .then(res => {
          this.toon = res.data;
          let charData = this.toon;
          return charData;
        })
        .then(charData => {
          this.toonName = charData.character.name;
          this.toonFaction = charData.faction.name;
          this.toonSpec = charData.active_spec.name;
          this.toonRace = charData.playable_race.name;
          this.toonClass = charData.playable_class.name;
        })
        .catch(err => {
          console.error(err);
        })
    },
    getToonImages() {
      console.log(process.env);
      axios
        .get(process.env.VUE_APP_GET_TOON_IMAGES)
        .then(res => {
          this.toonImgs = res.data;
          let charImgs = this.toonImgs;
          return charImgs;
        })
        .then(charImgs => {
          this.toonBust = charImgs.bust_url;
          this.toonAvatar = charImgs.avatar_url;
          this.toonFull = charImgs.render_url;
        })
    }
  },
  created() {
    this.getToon();
    this.getToonImages();
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