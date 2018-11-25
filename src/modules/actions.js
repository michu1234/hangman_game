import api from '../services/api'

export let gameActions = {
    getRandomWord({
        commit
      }) {
        try {
          api.getRandomWord().then(function (response) {
              commit('setRandomWord', response);
          })
        } catch (err) {
          console.log(err)  // eslint-disable-line no-console           
        }
      }
}