<template>
  <div id="games-grid">
    <RouterLink id="wow" class="game-topics" to="/games/worldofwarcraft">World of Warcraft</RouterLink>
    <div class="game-topics">Hearthstone</div>
    <div class="game-topics">Minecraft</div>
    <div class="game-topics">Pokemon</div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
  #wow {
    background: url('../../../assets/wlogo.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  #games-grid {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    text-align: center;
    height: 80vh;
  }

  .game-topics {
    background-color: maroon;
    margin: 5px;
  }
</style>