<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>  
      <v-menu open-on-hover top offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
          Categories 
          </v-btn>
        </template>
        <v-list>
          Cats in ...
          <v-list-item
            v-for="(category, index) in categories"
            :key="index"
          >
            <router-link :to="{name: 'Category', params: {id: category.id}}"><v-list-item-title>{{ category.name }}</v-list-item-title></router-link>
          </v-list-item>
        </v-list>
      </v-menu>    
<!--/ Menu on every page -->
      <router-link to="/random">Random</router-link>
    </div>
    
    <router-view :key="$route.fullPath"/>
<!--/ main content under menu -->
  </v-app>
</template>

<script lang="ts">

import {Component, Vue } from 'vue-property-decorator';
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

@Component
export default class App extends Vue {
  // get the name of the categories to show as dropdown menu items
  mounted() {
    this.$store.dispatch('getCategories')
  }
  get categories() {
    return this.$store.state.categories
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

#nav {
  height: 15vh;
  width: 100%;
  position: fixed;
  background-color: rgba(251, 220, 81, 0.342);
}

li {
  list-style: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main {
  padding-top: 20vh;
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
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
}

.random-pic img{
  width: 85vw;
  object-fit: cover;
}
 /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  
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
  grid-gap: 2%;
  }

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .images-wrapper {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2%;
  }

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
/* @media only screen and (min-width: 1200px) {
  
}  */

</style>
