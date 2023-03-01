<script>
import BoxCard from './BoxCard.vue';

export default {

    components: { BoxCard },
};
</script>

<template>
    <div class="py-5">
        <BoxCard />
    </div>
</template>

<style lang="scss" scoped>
@use "../components/scss/partials/style.scss" as *;
@use "../components/scss/partials/variables.scss" as *;
</style>