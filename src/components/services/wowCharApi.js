export default {
  getToon() {
    return fetch('https://us.api.blizzard.com/profile/wow/character/greymane/kretyn/appearance?namespace=profile-us&locale=en_US&access_token=US0hUL2ihvSpm4jbaq9YVd4NwfSNDco3Q4')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        return jsonData;
      })
  },
  getToonImage() {
    console.log('HERE');
    return fetch('https://us.api.blizzard.com/profile/wow/character/greymane/kretyn/character-media?namespace=profile-us&locale=en_US&access_token=US0hUL2ihvSpm4jbaq9YVd4NwfSNDco3Q4')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        return jsonData;
      })
  }
}