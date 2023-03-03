<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
    data() {
        return {
            term: "",

            cardtypes: [
                "Effect Monster",
                "Flip Effect Monster",
                "Flip Tuner Effect Monster",
                "Gemini Monster",
                "Normal Monster",
                "Normal Tuner Monster",
                "Pendulum Effect Monster",
                "Pendulum Effect Ritual Monster",
                "Pendulum Flip Effect Monster",
                "Pendulum Normal Monster",
                "Pendulum Tuner Effect Monster",
                "Ritual Effect Monster",
                "Ritual Monster",
                "Spell Card",
                "Spirit Monster",
                "Toon Monster",
                "Trap Card",
                "Tuner Monster",
                "Union Effect Monster"],
        }
    },
    props: {
        placeholder: String,
    },

    emits: ["on-search"],

    methods: {
        // clear() {
        //     this.term = "";
        // },
        search() {
            this.$emit("on-search", this.term);
        },
    },

};
</script>

<template>
    <form @submit.prevent="">
        <!-- <div class="input-group">
                                                        <input type="text" class="form-control" :placeholder="placeholder" v-model="term">
                                                        <button class="btn btn-success" type="button" @click="search">Search</button>
                                                        <button class="btn btn-warning" type="button" @click="clear">Reset</button>
                                                    </div> -->
        <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="term" @change="if
            (this.term) search();">
            <option v-for="item in cardtypes">{{ item }}</option>
        </select>
    </form>
</template>

<style lang="scss" scoped></style>