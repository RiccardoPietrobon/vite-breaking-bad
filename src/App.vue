<script>
import JugiMain from "./components/JugiMain.vue";
import NavBar from "./components/NavBar.vue";


export default {
  data() {
    return {
      title: "Hello",
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
</style>

