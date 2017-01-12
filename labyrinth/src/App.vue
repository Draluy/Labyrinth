<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <stage></stage>
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
