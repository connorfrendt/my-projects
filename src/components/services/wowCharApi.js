export default {
  getToonImages() {
    return fetch('https://us.api.blizzard.com/profile/wow/character/greymane/kretyn/character-media?namespace=profile-us&locale=en_US&access_token=US5E7tqZwOlOaGmS2vFHNVqIqGVrRUpJ4f')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        return jsonData;
      })
  }
}