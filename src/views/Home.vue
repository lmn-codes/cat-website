<template>
  <div>
    <div class="main">
      <v-menu open-on-hover top offset-y v-if="breeds.length >= 10">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on" class="sort">
            Sort
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="sortBreeds('affectionASC')"
            >Affection: low - high
          </v-list-item>
          <v-list-item @click="sortBreeds('affectionDESC')"
            >Affection: high - low
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- / Sort functionality -->
      <div class="images-wrapper">
        <li v-for="breed in breeds" :key="breed.id">
          <router-link :to="{ name: 'Detail', params: { id: breed.id } }">
            <div v-if="breed.image">
              <img :src="breed.image.url" />
            </div>
            <div v-else>
              <img src="../assets/logo.png" alt="" />
            </div>
            <p style="color: black;">{{ breed.name }}</p>
            <!-- / If the image is not undefined, show the image and breed name -->
          </router-link>
          <!--/ Link to the Detail page passing the chosen breed's id -->
        </li>
        <!--/ Show 10 pictures from the API array -->
      </div>
      <button class="load" v-if="visibility && breeds.length >= 10" @click="loadMore">
        More cats!!!
      </button>
      <!-- / Load more pictures -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

@Component
export default class Home extends Vue {
  private itemsShown = 10;
  private visibility = true;
  private loading = false;

  // dispatch the getBreeds actions in Store
  mounted() {
    this.$store.dispatch("getBreeds");
  }

  // populate the breeds array with 10 first breeds
  get breeds() {
    const breedList = this.$store.state.breeds;
    return breedList.slice(0, this.itemsShown);
  }

  // sort breeds by affection
  public sortBreeds(command: string) {
    this.$store.dispatch("sortBreeds", command);
  }

  // load more breeds
  public loadMore() {
    if (this.itemsShown *2 < this.$store.state.breeds.length) {
      this.itemsShown *= 2;
    } else {
      this.itemsShown = this.$store.state.breeds.length;
      this.visibility = false;
    }
  }
}
</script>
<style lang="css" scoped>
button {
  height: auto;
  width: fit-content;
  background-color: rgb(255, 242, 184);
  display: inline-block;
  padding: 5px;
}

button:hover {
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
}
</style>
