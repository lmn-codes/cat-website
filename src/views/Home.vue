<template>
  <div class="main">
      <v-menu open-on-hover top offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on" class="sort">
            Sort
            </v-btn>
          </template>
        <v-list>
          <v-list-item @click="sortBreeds">Affection: low - high</v-list-item>
        </v-list>
      </v-menu>
      <!--/ sort functionality -->
    <div class="images-wrapper">
      <li v-for="breed in breeds.slice(0, 10)" :key="breed.id">
        <router-link :to="{name: 'Detail', params: {id: breed.id}}" >
          <div v-if="breed.image">
            <img :src="breed.image.url" alt="">
            <p>{{breed.name}}</p>
          </div>
          <!--/ if the image is not undefined, show the image and breed name -->
        </router-link>
        <!--/ link to the Detail page passing the chosen breed's id -->
      </li>
      <!--/ show 10 pictures from the API array -->
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue } from 'vue-property-decorator';
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

@Component
export default class Home extends Vue { 
  mounted() {
    this.$store.dispatch('getBreeds')
  }
  get breeds() {
    return this.$store.state.breeds
  }
  public sortBreeds() {
    this.$store.dispatch('sortBreeds')
  }
}
</script>
