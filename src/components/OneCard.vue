<script>

export default {
    props: {
        pic: String,
        name: String,
        type: String,
    }
};
</script>

<template>
    <div class="col d-grid gap-3 my-2">

        <div class="box">
            <img :src="pic" alt="">
            <h3 class="p-2 text-center">{{ name }}</h3>
            <h4 class="p-2 text-center">{{ type }}</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../components/scss/partials/style.scss" as *;
@use "../components/scss/partials/variables.scss" as *;


.box {

    background-color: $bg-1;

    img {
        max-width: 170px;
    }

    h3 {
        font-size: 18px;
        text-transform: uppercase;
        color: white;
    }
}
</style>