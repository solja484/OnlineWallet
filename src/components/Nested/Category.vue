<template>
    <p class="text-center category-container m-4">
        <i class="fa fa-lg text-gray" :class="category.icon"></i><br>
        {{category.name}}<br>
        <strong :class="{textIncome: !category.outcome, textOutcome:category.outcome}">
            {{sign}}{{category.total}}</strong>
    </p>
</template>

<script>
    export default {
        name: "Category",
        props: ['category'],

        computed: {
            sign:function () {
                return this.category.outcome?"-":"+";
            }
        }
    }
</script>

<style scoped>
    .category-container {
        text-align: center !important;
    }

    .textOutcome {
        color: #cd0000 !important;
    }

    .textIncome {
        color: #93D800 !important;
    }

</style>