<template>
    <div class="card p-3 mb-2" :class="{borderOrange:data.scheduledTransaction.status!=1}">
        <p>{{data}}</p>
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
            <span><i class="fa fa-sm" :class="category.icon"/> {{category.name}}</span>
        </p>
        <p class="nav justify-content-between text-14 text-gray">
            <span>Дата та час</span>
            <span>{{data.date}}</span>
        </p>
        <div class="nav justify-content-between d-inline-flex pt-1">
            <!--button class="textIncome btn w-50" @click="accept">Підтвердити</button-->
            <button class="textOutcome btn w-50" @click="decline">Відхилити</button>
        </div>
    </div>
</template>

<script>
    import {BIconArrowClockwise, BIconCalendarCheck} from "bootstrap-vue";
    import {LogState} from "@/models/entities/LogPage";

    export default {
        name: "ScheduledCard",
        components: {BIconArrowClockwise, BIconCalendarCheck},
        props: ['data'],
        data() {
            return {
                upcoming: LogState.UPCOMING,
            }
        },
        computed: {
            category: function () {
                return this.$store.getters['category/all'].find(c => c.id == this.data.categoryid);
            },
            logState: function () {
                return this.$store.getters['state/logState'];
            }
        },
        methods: {
            accept: function () {
                this.$store.dispatch('acceptTransaction',this.data.id);
            },
            decline: function () {
                this.$store.dispatch('declineTransaction',this.data.id);
            }
        }
    }
</script>

<style scoped>
    .borderOrange {
        border: 1px solid #FE9D04;
    }
</style>