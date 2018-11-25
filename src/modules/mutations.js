export let gameMutations = {
    setRandomWord(state, payload) {
        state.randomWord = payload;
      },
      missedLetter(state, payload) {
        if (state.missedLetters.length <= 10) {
          state.missedLetters.push(payload);
        }
      }
}