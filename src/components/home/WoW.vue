<template>
  <div>
    <button id="back">
      <RouterLink id="link" to="/games">
        <img id="img" src="../../assets/back-arrow.png" height=35px/>
      </RouterLink>
    </button>
    
    <div>WOW</div>
    <div>{{ charFaction }}</div>
  </div>
</template>

<script>
// import wowCharApi from '../services/wowCharApi.js';

export default {
  data() {
    return {
      charFaction: '',
      charName: '',
      
    }
  },
  mounted() {
    fetch('https://us.api.blizzard.com/profile/wow/character/greymane/kretyn/appearance?namespace=profile-us&locale=en_US&access_token=USpr1gflBDt1D1UwmsoHtF09pEYIX4yjrH', {
      method: 'GET'
    })
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        this.charFaction = jsonData.faction.name;
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