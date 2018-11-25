<template>
    <div class="randomWord">
            <img class="randomWord__spinner" v-if="spinner" src="../assets/imgs/spinner.gif" alt="">
            <ul v-else class="randomWord__letters">
                    <li v-for="(data, index) in dataOBJ" :key="index"><span :class="data.className">{{data.letter}}</span></li>
            </ul>

    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                lettersMax: 11,
                offset: "",
                dataOBJ: [],
                missedLetters: [],
                spinner: true
            }
        },
        computed: {
            ...mapState([
                'randomWord'
            ])
        },
        watch: {
            randomWord() {
                let arr = this.randomWord.split("");
                let x = 0;

                if (this.lettersMax > arr.length) {
                    this.offset = this.lettersMax - arr.length;
                }

                while (x < arr.length) {
                    this.dataOBJ.push({
                        letter: arr[x],
                        className: 'randomWord__letter--full'
                    })
                    x++;
                }

                let y = 0;
                let self = this;

                if (arr.length < this.lettersMax) {
                    while (y < this.lettersMax - arr.length) {
                        self.dataOBJ.unshift({
                            letter: null,
                            className: 'randomWord__letter--empty'
                        })
                        y++;
                    }
                }

                this.guessLetter();
                this.spinner = false;
            }
        },
        methods: {
            guessLetter() {
                let self = this;

                window.addEventListener("keypress", function (e) {
                    let userLetterChoosen = String.fromCharCode(e.keyCode);
                    let arr = self.randomWord.split("");

                    if (userLetterChoosen) {
                        for (let x = 0; x < arr.length; x++) {
                            if (arr[x] === userLetterChoosen) {
                                self.dataOBJ[x + self.offset].className = "randomWord__letter--correct";
                            }
                        }

                        if (!arr.includes(userLetterChoosen)) {
                            self.$store.commit('missedLetter', userLetterChoosen)
                        }
                        
                    }
                });
            }
        }
    }
</script>