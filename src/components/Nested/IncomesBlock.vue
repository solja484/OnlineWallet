<template>
    <div class="px-5 container" v-if="!loading">
        <div class="row w-100">
                <Category v-for="c in categories" :key="c.id" :category="c" class=" text-center w-25"></Category>
        </div>
    </div>
</template>

<script>
    import Category from "@/components/Nested/Category";

    export default {
        name: "IncomesBlock",
        components: {Category},
        computed: {
            loading: function () {
                return this.$store.getters['category/loading']
            },
            categories: function () {
                return this.$store.getters['category/incomes']
            }
        },

    }
</script>

<style scoped>

</style>