<template>
  <div class="home">
    <li v-for="breed in breeds" :key="breed.id">
      <!-- link to the Detail page passing the chosen breed's id -->
      <router-link :to="{name: 'Detail', params: {id: breed.id}}">
      <!-- if the image is not undefined -->
      <div v-if="breed.image">
        <img :src="breed.image.url" alt="">
      </div></router-link>
    </li>
    <div></div>
  </div>
</template>

<script lang="ts">

import {Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  get breeds(): string {
    this.$store.dispatch('getBreeds')
    return this.$store.state.breeds
  } 
}
</script>
