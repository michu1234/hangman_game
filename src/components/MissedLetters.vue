<template>
    <div class="missedLetters">
        <p class="missedLetters__header">you missed:</p>
        <ul class="missedLetters__list">
            <li v-for="(letter, index) in missedLetters" :key="index"><span class="missedLetters__letter">{{letter}}</span></li>
        </ul>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'

    export default {
        data() {
            return {}
        },
        computed: {
            ...mapState([
                'missedLetters'
            ])
        }
    }
</script>
