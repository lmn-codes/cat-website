<template>
  <div class="main">
    <div class="images-wrapper">
      <li v-for="catPic in catPics" :key="catPic.id">
        <div v-if="catPic">
          <img :src="catPic.url" alt="" />
        </div>
        <!-- if the image is not undefined, show the image -->
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Category extends Vue {
  mounted() {
    this.$store.dispatch("getSelectedCategoryPictures", this.$route.params.id);
  }
  
  get catPics() {
    return this.$store.state.selectedCategoryPictures;
  }
}
</script>
