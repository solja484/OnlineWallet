<template>
    <div class="category-container m-4">
        <i class="fa fa-lg fa-university" :class="category.icon"></i>
        <p> {{category.name}}</p>
        <p class="bold"> {{category.money}}</p>
    </div>
</template>

<script>
    export default {
        name: "Category",
        props: ['category']
    }
</script>

<style scoped>
    .category-container{
        text-align: center;
    }
</style>