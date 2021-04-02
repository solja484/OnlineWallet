<template>
    <p class="text-center category-container m-4">
        <i class="fa fa-lg text-gray" :class="category.icon"></i><br>
        {{category.name}}<br>
        <strong :class="{textIncome: !category.outcome, textOutcome:category.outcome}">
            {{expenses}}</strong>
    </p>
</template>

<script>
    export default {
        name: "Category",
        props: ['category'],
        computed: {
            expenses: function () {
                const exp = this.$store.getters['category/expenses'].find(e => e.categoryid == this.category.id);
                return exp ? exp.total : "-";
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