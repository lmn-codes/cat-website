<template>
  <v-app id="app">
    <ul id="nav">
      <li>
        <v-btn text class="text-none"
          ><router-link to="/">Home</router-link></v-btn
        >
      </li>
      <!-- / route to Home -->
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
      </li>
      <!-- / drop down menu of all the categories -->
      <!-- / dynamic routes to each category -->
      <li>
        <v-btn text class="text-none"
          ><router-link to="/random">Random</router-link></v-btn
        >
      </li>
      <!-- / route to Random -->
      <li>
        <img
          src="./assets/logo.png"
          alt=""
          style="height: 10vh; width: 10vh;"
        />
      </li>
    </ul>
    <!--/ Menu on every page -->
    <keep-alive><router-view :key="$route.fullPath"/></keep-alive>
    <!-- / main content under menu -->
    <footer>
      <em
        >Cats are adopted from
        <a href="https://thecatapi.com/">TheCatAPI.com</a>
      </em>
      | <em><a href="map.xml">Sitemap</a></em>
    </footer>
    <!-- / footer incl sitemap -->
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


/* ==========================================================================
  Reset css
========================================================================== */


*,
*::before,
*::after {
  box-sizing: border-box;
}

#app,
body {
  font-family: "Roboto", sans-serif;
  text-align: center;
  height: 100%;
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
  height: auto !important;
  min-width: auto !important;
  font-weight: normal;
}

em {
  font-size: 0.75em;
  color: #5c5c5c;
}


/* ==========================================================================
  Menu styling
========================================================================== */


#nav {
  height: 10vh;
  width: 100%;
  position: fixed;
  background-color: rgb(255, 242, 184);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
}

/* Links */
#nav a,
.main a {
  height: auto;
  text-decoration: none;
  color: black;
}


/* ==========================================================================
  Main section (router-view) styling
========================================================================== */


.main {
  padding: 15vh 0vh;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}


/* Home page
   ========================================================================== */


/* Images in wrappers with > 1 image */
.images-wrapper img {
  height: 25vh;
  width: 100%;
  object-fit: cover;
}

/* Sort button on Home page */
.sort {
  justify-self: start;
  align-self: end;
  margin-bottom: 5vh;
}

/* Load more button on Home page */
.load {
  align-self: center;
}

/* Hide the load more button if !visibility */
.hide {
  visibility: hidden;
}


/* Detail page
   ========================================================================== */


/* Breed image on the detail page */
.breed-image img {
  height: 20vh;
  width: 80vw;
  object-fit: cover;
}


/* Random page
   ========================================================================== */


/* Random image on the random page  */
.random-pic img {
  width: 85vw;
  height: 70vh;
  object-fit: cover;
}

/* Get another random image on the random page */
.another {
  display: inline-block;
  padding: 5px;
  align-self: center;
  margin-bottom: 10px;
}


/* ==========================================================================
  Footer styling
========================================================================== */


footer {
  height: 5vh;
  width: 100vw;
  background-color: rgb(255, 242, 187);
  position: absolute;
  bottom: 0;
}


/* ==========================================================================
  Media / responsive 
========================================================================== */



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .v-btn {
    font-size: 4vw !important;
    padding: 5px !important;
  }
  #nav {
    justify-content: center;
  }
  .breed-image img {
    height: 40vh;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .images-wrapper img {
    height: 35vh;
  }
  .breed-image img {
    height: 50vh;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .main {
    width: 90%;
  }
  .images-wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 3px;
  }
  .breed-image img {
    height: 60vh;
  }
  .random-pic img {
    height: auto;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .main {
    width: 85%;
  }
  .images-wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
  .breed-image img {
    height: 70vh;
  }
}
</style>
