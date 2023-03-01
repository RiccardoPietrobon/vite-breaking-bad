<script>
import JugiMain from "./components/JugiMain.vue";
import NavBar from "./components/NavBar.vue";
import axios from 'axios';
import { store } from "./data/store";



export default {
  data() {
    return {
      store,
    };
  },

  created() {
    /* faccio la richiesta */
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0")
      /* prendo la richiesta */
      .then((response) => {
        console.log(response);
        /* riempio l'array */
        store.cardsarray = response.data.data;
      });
  },

  components: { JugiMain, NavBar },
};
</script>

<template>
  <NavBar />
  <JugiMain />
</template>

<style lang="scss" scoped>
@use "./components/scss/partials/style.scss" as *;
@use "./components/scss/partials/variables.scss" as *;


* {
  background-color: $bg-1;

  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

