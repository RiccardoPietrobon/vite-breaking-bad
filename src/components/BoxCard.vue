<script>
import OneCard from './OneCard.vue';
import { store } from "../data/store";
import Comandi from './Comandi.vue';
import axios from 'axios';



export default {

    data() {
        return {
            store,
            endpoint: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0",

        };
    },

    methods: {
        fetchCards(url) {
            store.isloading = true;
            /* faccio la richiesta */
            axios
                .get(url)
                /* prendo la richiesta */
                .then((response) => {
                    /* riempio l'array */
                    store.cardsarray = response.data.data;
                    console.log(response)
                })
                .then((responseNum) => {
                    /* riempio l'oggetto che mi serve per il numero di carte */
                    store.cardnumber = responseNum.data.data;
                    console.log(responseNum)
                })

                /* in questo caso svuota l'array se ci sono errori */
                // .catch((error) => {
                //     store.cardsarray = [];
                //     console.error(error);
                // })
                .finally(() => {
                    store.isloading = false;
                })
        },

        fetchFiltered(term) {
            this.fetchCards(`${this.endpoint}&type=${term}`);
        },

    },

    created() {
        this.fetchCards(this.endpoint);
    },

    components: { OneCard, Comandi },
};
</script>

<template>
    <div class="p-5 container" v-if="!store.isloading">

        <nav>
            <h3 class="fw-bold p-3">Found {{ store }} Cards</h3>

        </nav>

        <Comandi @on-search="fetchFiltered" />

        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">
            <OneCard v-for="singleCard in store.cardsarray"
                :pic="singleCard.card_images[singleCard.card_images.length - 1].image_url" :name="singleCard.name"
                :type="singleCard.type" />

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