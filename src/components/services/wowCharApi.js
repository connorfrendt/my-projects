export default {
  getToon() {
    return fetch('https://us.api.blizzard.com/profile/wow/character/greymane/kretyn/appearance?namespace=profile-us&locale=en_US&access_token=USpr1gflBDt1D1UwmsoHtF09pEYIX4yjrH')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        console.log(jsonData);
        return jsonData;
      })
  }
}