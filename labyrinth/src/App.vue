<template>
  <div id="app" class="pure-g">
    <div class="pure-u-5-5">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      <game></game>
    </div>
      <el-button>Default Button</el-button>
  </div>
</template>

<script>
import Game from './vues/Game.vue';

export default {
  name: 'labyrinth',
  data () {
    return {
      msg: 'The Labyrinth'
    }
  },
  components: { Game }
}


</script>

<style>
img {
    height: auto;
    width: 10vw;
}

</style>
