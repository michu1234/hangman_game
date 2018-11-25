<template>
    <div class="hangman">
        <div class="hangman__horizontalPipe"></div>
        <div class="hangman__verticalPipe"></div>
        <img v-if="misseLettersCounter>0" class="hangman__head" src="../assets/imgs/head.png" alt="">
        <div v-if="misseLettersCounter>1" class="hangman__neck"></div>
        <div v-if="misseLettersCounter>2" class="hangman__body">
            <div class="hangman__upperbody">
                <div class="hangman__leftchest"></div>
                <div class="hangman__rightchest"></div>
            </div>
            <div class="hangman__lowerbody"></div>
        </div>
        <div v-if="misseLettersCounter>3" class="hangman__rightArm"></div>
        <div v-if="misseLettersCounter>4" class="hangman__leftArm"></div>
        <div v-if="misseLettersCounter>5" class="hangman__rightHand"></div>
        <div v-if="misseLettersCounter>6" class="hangman__leftHand"></div>
        <div v-if="misseLettersCounter>7" class="hangman__rightLeg"></div>
        <div v-if="misseLettersCounter>8" class="hangman__leftLeg"></div>
        <div v-if="misseLettersCounter>9" class="hangman__rightFoot"></div>
        <div v-if="misseLettersCounter>10" class="hangman__leftFoot"></div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'misseLettersCounter'
            ])
        }
    }
</script>
