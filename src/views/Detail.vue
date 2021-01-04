<template>
  <div class="main">
    <div>
      <!-- TODO: add the method to get country flag -->
        <v-chip>
        <v-avatar>
          <img :src="country_flag_url" :alt="selected_breed.country_code">
        </v-avatar>
        {{selected_breed.origin}}</v-chip>
        <v-chip v-if="selected_breed.experimental==1">Experimental</v-chip>
        <v-chip v-if="selected_breed.rex==1">Rex</v-chip>
        <v-chip v-if="selected_breed.natural==1">Natural</v-chip>
        <v-chip v-if="selected_breed.rare==1">Rare</v-chip>
        <v-chip v-if="selected_breed.hairless==1">Hairless</v-chip>
        <v-chip v-if="selected_breed.suppressed_tail==1">Suppressed Tail</v-chip>
        <v-chip v-if="selected_breed.short_legs==1">Short Legs</v-chip>
        <v-chip v-if="selected_breed.hypoallergenic==1">Hypoallergenic</v-chip>
    </div>
    <div>
      <img :src="selected_breed.image.url" >
      <h3 class="headline mb-0">{{selected_breed.name}}</h3>
      <div>{{selected_breed.description}}</div>
      <div>---</div>
      <div><i>{{selected_breed.temperament}}</i></div>
    </div>
    <v-list>
  <v-list-tile>

    <v-list-tile-content>
      
Affection Level
    </v-list-tile-content>

    <v-list-tile-action>
          <v-rating
            v-model="selected_breed.affection_level "
            readonly
            size="18"
          ></v-rating></v-list-tile-action>
  </v-list-tile>

  <v-list-tile>
    <v-list-tile-content>
          Adaptability
    </v-list-tile-content>

    <v-list-tile-action>
          <v-rating
          v-model="selected_breed.adaptability "
          readonly
          size="18"
        ></v-rating></v-list-tile-action>
  </v-list-tile>

  <v-list-tile>
  <v-list-tile-content>
          Child Friendly
  </v-list-tile-content>

  <v-list-tile-action>
          <v-rating
          v-model="selected_breed.child_friendly "
          readonly
          size="18"
      ></v-rating></v-list-tile-action>
  </v-list-tile>
  <v-list-tile>
  <v-list-tile-content>
          Dog Friendly
  </v-list-tile-content>

  <v-list-tile-action>
          <v-rating
          v-model="selected_breed.dog_friendly "
          readonly
          size="18"
      ></v-rating></v-list-tile-action>
  </v-list-tile>
  
  <v-list-tile>
          <v-list-tile-content>
                  Energy Level
          </v-list-tile-content>

          <v-list-tile-action>
                  <v-rating
                  v-model="selected_breed.energy_level "
                  readonly
                  size="18"
              ></v-rating></v-list-tile-action>
          </v-list-tile>
  <v-list-tile>
          <v-list-tile-content>
                  Grooming
          </v-list-tile-content>

          <v-list-tile-action>
                  <v-rating
                  v-model="selected_breed.grooming "
                  readonly
                  size="18"
              ></v-rating></v-list-tile-action>
          </v-list-tile>
  
  <v-list-tile>
          <v-list-tile-content>
                  Health Issues
          </v-list-tile-content>

          <v-list-tile-action>
                  <v-rating
                  v-model="selected_breed.health_issues "
                  readonly
                  size="18"
              ></v-rating></v-list-tile-action>
          </v-list-tile>
  <v-list-tile>
          <v-list-tile-content>
                  Intelligence
          </v-list-tile-content>

          <v-list-tile-action>
                  <v-rating
                  v-model="selected_breed.intelligence "
                  readonly
                  size="18"
              ></v-rating></v-list-tile-action>
          </v-list-tile>
  
  <v-list-tile>
          <v-list-tile-content>
              Shedding Level
          </v-list-tile-content>

          <v-list-tile-action>
                  <v-rating
                  v-model="selected_breed.shedding_level "
                  readonly
                  size="18"
              ></v-rating></v-list-tile-action>
          </v-list-tile>
  
  <v-list-tile>
          <v-list-tile-content>
                  Social Needs
          </v-list-tile-content>

          <v-list-tile-action>
                  <v-rating
                  v-model="selected_breed.social_needs "
                  readonly
                  size="18"
              ></v-rating></v-list-tile-action>
          </v-list-tile>
    
  <v-list-tile>
          <v-list-tile-content>
                  Stranger Friendly
          </v-list-tile-content>

          <v-list-tile-action>
                  <v-rating
                  v-model="selected_breed.stranger_friendly "
                  readonly
                  size="18"
              ></v-rating></v-list-tile-action>
          </v-list-tile>    
  
  <v-list-tile>
          <v-list-tile-content>
                  Vocalisation
          </v-list-tile-content>

          <v-list-tile-action>
                  <v-rating
                  v-model="selected_breed.vocalisation "
                  readonly
                  size="18"
              ></v-rating></v-list-tile-action>
          </v-list-tile>  
        
</v-list> 
        <div class="other-breeds">
        <h1>Other breeds</h1>
        <div class="images-wrapper">
        <li v-for="relatedPic in relatedPics" :key="relatedPic.id">
                <router-link :to="{name: 'Detail', params: {id: relatedPic.id}}" >
                <img :src="relatedPic.image.url" alt=""></router-link>        
        </li></div></div>   
  </div>
</template>

<script lang="ts">

import {Component, Vue } from 'vue-property-decorator';
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

@Component
export default class Detail extends Vue {
  // get the correct detail of the breed based on its id
  private selected_breed = this.$store.getters.breed(this.$route.params.id)
  mounted() {
        this.$store.dispatch('getRelatedPics', this.selected_breed.id)
  }
  get relatedPics() {
      return this.$store.state.relatedPics
  }
}
</script>
