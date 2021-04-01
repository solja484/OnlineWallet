<template>
    <div class="card px-3 pt-3 mb-2 border-orange">
        <p class="bold text-18 mb-0"
           :class="{textIncome: data.isincome, textOutcome:!data.isincome}">
            ₴{{data.amount}}
            <span class="float-right regular text-14 text-gray">
                <b-icon-arrow-clockwise/> щомісяця
            </span>
        </p>
        <p class="mb-3"> {{data.comment}}</p>
        <p class="nav justify-content-between text-14 text-gray mb-2">
            <span>Категорія</span>
            <span><i class="fa fa-heart fa-sm" :class="category.icon"/>{{category.name}}</span>
        </p>
        <p class="nav justify-content-between text-14 text-gray">
            <span>Дата та час</span>
            <span>{{data.date}}}</span>
        </p>
        <div class="nav justify-content-between d-inline-flex py-1">
            <button class="textIncome btn w-50" @click="accept">Підтвердити</button>
            <button class="textOutcome btn w-50" @click="decline">Відхилити</button>
        </div>
    </div>
</template>

<script>
    import {BIconArrowClockwise} from "bootstrap-vue";

    export default {
        name: "ScheduledCard",
        components: {BIconArrowClockwise},
        props:['data'],
        computed:{
            category:function () {
                return this.$store.getters['category/all'].find(c=>c.id==this.data.categoryid);
            }
        },
        methods:{
            accept:function () {
                //TODO
            },
            decline:function () {
                //TODO
            }
        }
    }
</script>

<style scoped>
    .border-orange{
        border:1px solid #FE9D04;
    }
</style>