<script>
import JugiMain from "./components/JugiMain.vue";
import NavBar from "./components/NavBar.vue";
import { store } from "./data/store";



export default {
  data() {
    return {
      store,
    };
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

