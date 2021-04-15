<template>
    <div class="card p-3 mb-2">
        <p class="bold text-18 mb-0"
           :class="{textIncome: data.isincome, textOutcome:!data.isincome}">
            ₴{{data.amount}}
        </p>
        <p class="mb-3"> {{data.comment}}</p>
        <p class="nav justify-content-between text-14 text-gray mb-2">
            <span>Категорія</span>
            <span><i class="fa fa-heart fa-sm" :class="category.icon"/> {{category.name}}</span>
        </p>
        <p class="nav justify-content-between text-14 text-gray">
            <span>Дата та час</span>
            <span>{{data.date}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "TransactionCard",
        props:['data'],
        computed:{
            category:function () {
                return this.$store.getters['category/all'].find(c=>c.id==this.data.categoryid);
            }
        },
    }
</script>

<style scoped>


</style>