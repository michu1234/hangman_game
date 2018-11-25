<template>
  <div class="home">
    <div class="home__wrapper">
      <hang-man></hang-man>
      <missed-letters></missed-letters>
    </div>
    <random-word></random-word>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HangMan from '@/components/HangMan.vue'
  import MissedLetters from '@/components/MissedLetters.vue'
  import RandomWord from '@/components/RandomWord.vue'

  export default {
    name: 'home',
    components: {
      'hang-man': HangMan,
      'missed-letters': MissedLetters,
      'random-word': RandomWord
    }
  }
</script>
