<template>
  <div class="main">
    <div>
      <v-chip>
        <v-avatar>
          <img :src="countryFlagURL" :alt="selectedBreed.country_code" />
        </v-avatar>
        {{ selectedBreed.origin }}</v-chip>
      <v-chip v-if="selectedBreed.experimental == 1">Experimental</v-chip>
      <v-chip v-if="selectedBreed.rex == 1">Rex</v-chip>
      <v-chip v-if="selectedBreed.natural == 1">Natural</v-chip>
      <v-chip v-if="selectedBreed.rare == 1">Rare</v-chip>
      <v-chip v-if="selectedBreed.hairless == 1">Hairless</v-chip>
      <v-chip v-if="selectedBreed.suppressed_tail == 1">Suppressed Tail</v-chip>
      <v-chip v-if="selectedBreed.short_legs == 1">Short Legs</v-chip>
      <v-chip v-if="selectedBreed.hypoallergenic == 1">Hypoallergenic</v-chip>
    </div>
    <!-- show the original country and the main characteristic of the breed -->
    <div class="breed-image">
      <img :src="selectedBreed.image.url" />
    </div>
    <div class="breed-description">
      <h3 class="headline mb-0">{{ selectedBreed.name }}</h3>
      <div>{{ selectedBreed.description }}</div>
      <div>---</div>
      <div>
        <i>{{ selectedBreed.temperament }}</i>
      </div>
    </div>
    <!-- show the image of the breed -->
    <v-list>
      <v-list-item>
        <v-list-item-content>
          Affection Level
        </v-list-item-content>
        <v-list-item-action>
          <v-rating
            v-model="selectedBreed.affection_level"
            readonly
            size="18"
          ></v-rating>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          Adaptability
        </v-list-item-content>
        <v-list-item-action>
          <v-rating
            v-model="selectedBreed.adaptability"
            readonly
            size="18"
          ></v-rating>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          Child Friendly
        </v-list-item-content>

        <v-list-item-action>
          <v-rating
            v-model="selectedBreed.child_friendly"
            readonly
            size="18"
          ></v-rating>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          Dog Friendly
        </v-list-item-content>

        <v-list-item-action>
          <v-rating
            v-model="selectedBreed.dog_friendly"
            readonly
            size="18"
          ></v-rating>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          Energy Level
        </v-list-item-content>
        <v-list-item-action>
          <v-rating
            v-model="selectedBreed.energy_level"
            readonly
            size="18"
          ></v-rating>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          Grooming
        </v-list-item-content>
        <v-list-item-action>
          <v-rating
            v-model="selectedBreed.grooming"
            readonly
            size="18"
          ></v-rating>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          Health Issues
        </v-list-item-content>

        <v-list-item-action>
          <v-rating
            v-model="selectedBreed.health_issues"
            readonly
            size="18"
          ></v-rating>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          Intelligence
        </v-list-item-content>

        <v-list-item-action>
          <v-rating
            v-model="selectedBreed.intelligence"
            readonly
            size="18"
          ></v-rating>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          Shedding Level
        </v-list-item-content>

        <v-list-item-action>
          <v-rating
            v-model="selectedBreed.shedding_level"
            readonly
            size="18"
          ></v-rating>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          Social Needs
        </v-list-item-content>

        <v-list-item-action>
          <v-rating
            v-model="selectedBreed.social_needs"
            readonly
            size="18"
          ></v-rating>
        </v-list-item-action>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          Stranger Friendly
        </v-list-item-content>
        <v-list-item-action>
          <v-rating
            v-model="selectedBreed.stranger_friendly"
            readonly
            size="18"
          ></v-rating>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          Vocalisation
        </v-list-item-content>

        <v-list-item-action>
          <v-rating
            v-model="selectedBreed.vocalisation"
            readonly
            size="18"
          ></v-rating>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <!-- show the ratings of the selected breed -->
    <div class="other-breeds">
      <h1>Other breeds</h1>
      <div class="images-wrapper">
        <li v-for="relatedPic in relatedPics" :key="relatedPic.id">
          <router-link :to="{ name: 'Detail', params: { id: relatedPic.id } }">
            <img :src="relatedPic.image.url" alt=""
          /></router-link>
        </li>
      </div>
    </div>
    <!-- show 3 related items -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

@Component
export default class Detail extends Vue {
  // get the correct detail of the breed based on its id
  private selectedBreed = this.$store.getters.breed(this.$route.params.id);
  mounted() {
    this.$store.dispatch("getRelatedPics", this.selectedBreed.id);
  }
  get relatedPics() {
    return this.$store.state.relatedPics;
  }
  get countryFlagURL() {
    console.log(this.selectedBreed.country_code.toLowerCase());
    return `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/${this.selectedBreed.country_code.toLowerCase()}.svg`;
  }
}
</script>
