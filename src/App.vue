<template>
  <v-app id="app">
    <ul id="nav">
      <li>
        <v-btn text class="text-none"
          ><router-link to="/">Home</router-link></v-btn
        >
      </li>
      <li>
        <v-menu open-on-hover top offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text class="text-none" v-bind="attrs" v-on="on">
              Categories
            </v-btn>
          </template>
          <v-list>
            Cats in ...
            <v-list-item v-for="(category, index) in categories" :key="index">
              <router-link
                :to="{ name: 'Category', params: { id: category.id } }"
                ><v-list-item-title>{{
                  category.name
                }}</v-list-item-title></router-link
              >
            </v-list-item>
          </v-list>
        </v-menu>
        <!--/ Menu on every page -->
      </li>
      <li>
        <v-btn text class="text-none"
          ><router-link to="/random">Random</router-link></v-btn
        >
      </li>
    </ul>
    <router-view :key="$route.fullPath" />
    <!--/ main content under menu -->
    <footer>
      <em>Cats are adopted from<a href="https://thecatapi.com/"> TheCatAPI.com</a>
      </em> | <em><a href="https://linhnguyen-511.github.io/cat-website/map.xml">Sitemap</a></em>
    </footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

@Component
export default class App extends Vue {
  // get the name of the categories to show as dropdown menu items
  mounted() {
    this.$store.dispatch("getCategories");
  }
  get categories() {
    return this.$store.state.categories;
  }
}
</script>

<style>
/*reset.css*/
/* RESETS */
*,
*::before,
*::after {
  box-sizing: border-box;
}
#app,
body {
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

li {
  list-style: none;
}

.v-btn {
  font-size: 1em !important;
  font-weight: normal;
}

#nav {
  height: 10vh;
  width: 100%;
  position: fixed;
  background-color: rgba(251, 220, 81, 0.342);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
}

#nav a,
.main a {
  height: auto;
  text-decoration: none;
  color: black;
}

.main {
  padding: 15vh 0vh;
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.sort {
  justify-self: start;
  align-self: end;
  margin-bottom: 5vh;
}

.images-wrapper img {
  height: 25vh;
  width: 100%;
  object-fit: cover;
  border: 2px solid #919090;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
}

.random-pic img {
  width: 85vw;
  object-fit: cover;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  #nav {
    justify-content: center;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .images-wrapper img {
    height: 35vh;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .images-wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .images-wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
/* @media only screen and (min-width: 1200px) {
  
}  */

.breed-image {
  width: 100%;
  height: auto;
}

footer {
  height: 5vh;
  background-color: rgba(251, 220, 81, 0.342);
}

em {
  font-size: 0.75em;
  color: #5c5c5c;
}
</style>
