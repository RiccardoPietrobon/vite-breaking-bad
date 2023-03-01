<script>
import OneCard from './OneCard.vue';
import { store } from "../data/store";


export default {

    data() {
        return {
            store,
        };
    },

    components: { OneCard },
};
</script>

<template>
    <div class="p-5 container" v-if="!store.isloading">

        <nav>
            <h3 class="fw-bold p-3">Found Cards</h3>

        </nav>

        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">
            <OneCard v-for="singleCard in store.cardsarray"
                :pic="singleCard.card_images[singleCard.card_images.length - 1].image_url" :name="singleCard.name"
                :type="singleCard.archetype" />

        </div>


    </div>

    <div class="overlay" v-else>

        <h2>Page is loading...</h2>
    </div>
</template>

<style lang="scss" scoped>
@use "../components/scss/partials/style.scss" as *;
@use "../components/scss/partials/variables.scss" as *;


div {
    background-color: white;

    nav {
        background-color: $bg-2;
        color: white;
    }

    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>