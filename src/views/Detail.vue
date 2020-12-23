<template>
  <div class="detail">
    <div>
      <img :src="selected_breed.image.url" >
      <h3 class="headline mb-0">{{selected_breed.name}}</h3>
      <div>{{selected_breed.description}}</div>
      <div>---</div>
      <div><i>{{selected_breed.temperament}}</i></div>
    </div>
                      
  </div>
</template>

<script lang="ts">

import {Component, Vue } from 'vue-property-decorator';

@Component
export default class Detail extends Vue {
  // get the correct detail of the breed based on its id
  private selected_breed = this.$store.getters.breed(this.$route.params.id)
}
</script>
