<template>
  <div class="main">
    <button @click = "getAnotherPic">Get Another Picture</button>
    <div class="random-pic">
      <div v-if="randomPic">
        <img :src="randomPic[0].url" alt="">
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">

import {Component, Vue } from 'vue-property-decorator';

@Component
export default class Random extends Vue { 
  mounted() {
      this.$store.dispatch('getRandomPic')
  }
  get randomPic() {
    return this.$store.state.randomPic
  }
  private getAnotherPic() {
      this.$store.dispatch('getRandomPic')
  }
}
</script>