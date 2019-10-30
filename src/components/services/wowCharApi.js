export default {
  getToon() {
    return fetch(`https://us.api.blizzard.com/profile/wow/character/greymane/kretyn/appearance?namespace=profile-us&locale=en_US&access_token=USuzmm4C6HqKoDlx7dj7HJPb2nQU73eiCB`)
      .then(res => res.json());
  }
}