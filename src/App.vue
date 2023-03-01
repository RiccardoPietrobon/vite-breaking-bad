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
    store.isloading = true;
    /* faccio la richiesta */
    axios
      .get(store.endpoint)
      /* prendo la richiesta */
      .then((response) => {
        /* riempio l'array */
        store.cardsarray = response.data.data;
      })

      /* in questo caso svuota l'array se ci sono errori */
      .catch((error) => {
        store.cardsarray = [];
        console.error(error);
      })
      .finally(() => {
        store.isloading = false;
      })
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

