<template>
    <p class="text-center category-container m-4">
        <i class="fa fa-lg text-gray" :class="category.icon"></i><br>
        {{category.name}}<br>
        <strong>{{category.name}}</strong>
    </p>
</template>

<script>
    export default {
        name: "Category",
        props: ['category']
    }
</script>

<style scoped>
    .category-container {
        text-align: center !important;
    }
</style>