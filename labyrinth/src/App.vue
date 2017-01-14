<template>
  <div id="app" class="pure-g">
    <div class="pure-u-5-5">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      <stage></stage>
    </div>
  </div>
</template>

<script>
import Stage from './vues/Stage.vue';

export default {
  name: 'labyrinth',
  data () {
    return {
      msg: 'The Labyrinth'
    }
  },
  components: { Stage }
}


</script>

<style>
img {
    height: auto;
    width: 10vw;
}


</style>
