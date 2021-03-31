<template>
    <div class="px-5 py-3 flex" v-if="!loading">
        <div  v-for="c in categories" :key="c.name">
            <Category v-if="c.outcome" :category="c"></Category>
        </div>
    </div>
</template>

<script>
    import Category from "@/components/Nested/Category";
    export default {
        name: "OutcomesBlock",
        components: {Category},
        computed:{
            loading:function(){
                return this.$store.getters['category/loading']
            },
            categories:function(){
                return this.$store.getters['category/categories'];
            }
        },
        mounted(){
            this.$store.dispatch('category/fetchCategories');
        }
    }
</script>

<style scoped>

</style>