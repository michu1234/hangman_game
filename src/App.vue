<template>
  <div id="app">
    <div v-if="missedLetters.length > 10" class="modal">
      <h2>game over</h2>
      <button @click="resetGame">new word</button>
    </div>
    <router-view />
  </div>
</template>


<script>
  import {
    mapActions, mapState
  } from 'vuex';

  export default {
    computed: {
      ...mapState([
        'missedLetters'
      ])
    },
    methods: {
      ...mapActions([
        'getRandomWord'
      ]),
      resetGame() {
        location.reload();
      }
    },
    created() {
      this.$nextTick(function () {
        this.getRandomWord();
      })

    }
  }
</script>

<style lang="scss" src="./assets/scss/main.scss">

</style>
