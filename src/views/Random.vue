<template>
  <div class="main">
    <button class="another" @click="getAnotherPic">Get Another Picture</button>
    <!-- / Get another picture -->
    <div class="random-pic">
      <div v-if="randomPic">
        <img :src="randomPic[0].url" alt="" />
      </div>
    </div>
    <!-- / Get a random picture -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Random extends Vue {
  mounted() {
    this.$store.dispatch("getRandomPic");
  }

  get randomPic() {
    return this.$store.state.randomPic;
  }

  private getAnotherPic() {
    this.$store.dispatch("getRandomPic");
  }
}
</script>

<style lang="css" scoped>
button {
  height: auto;
  width: fit-content;
  background-color: rgb(255, 242, 184);
}

button:hover {
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
}
</style>