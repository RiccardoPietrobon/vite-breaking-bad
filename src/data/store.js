/* rendere reattivo globalmente store */
import { reactive } from "vue";

export const store = reactive({
    cardsarray: [],
    endpoint: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0",
    isloading: false,
});

