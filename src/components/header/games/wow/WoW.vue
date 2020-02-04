<template>
    <div>
        <button id="back">
            <RouterLink id="link" to="/games">
                <img id="img" src="../../../../assets/back-arrow.png" height=35px/>
            </RouterLink>
        </button>
        
        <div style="text-align: center">
            {{ toonName }}, the {{ toonRace }} {{ toonSpec }} {{ toonClass }}, champion of the {{ toonFaction }}!
        </div>
        <br />

        <!-- <Head
            :headId="headId"
        /> -->
        
        <div style="text-align: center">
            <img :src="toonFull" style="height: 450px"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// import Head from './gear/Head';

export default {
  data() {
    return {
      toon: [],
      toonImgs: [],
      toonAllGear: [],
      toonHead: '',
      toonName: '',
      toonFaction: '',
      toonRace: '',
      toonSpec: '',
      toonClass: '',
      toonFull: '',
      headId: 0
    }
  },
  components: {
    // Head
  },
  methods: {
    getToon() {
      axios
        .get(process.env.VUE_APP_TOON_APPEARANCE)
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
      axios
        .get(process.env.VUE_APP_TOON_IMAGES)
        .then(res => {
          this.toonImgs = res.data;
          let charImgs = this.toonImgs;
          return charImgs;
        })
        .then(charImgs => {
          this.toonFull = charImgs.render_url;
        })
        .catch(err => {
          console.error(err);
        })
    },
    getToonGear() {
      axios
        .get(process.env.VUE_APP_TOON_GEAR)
        .then(res => {
          this.headId = res.data.equipped_items[0].item.id;
          console.log('Wow.vue current headId', this.headId);
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  created() {
    this.getToon();
    this.getToonImages();
    // this.getToonGear();
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