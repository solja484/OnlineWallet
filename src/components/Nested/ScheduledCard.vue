<template>
    <div class="card p-3 mb-2" :class="{borderOrange:currentDate>data.nextsend}">
        <p class="bold text-18 mb-0"
           :class="{textIncome: !data.category.outcome, textOutcome:data.category.outcome}">
            ₴{{data.amount}}
            <span class="float-right regular text-14 text-gray" v-if="data.schedule">
                <b-icon-arrow-clockwise/> щомісяця
            </span>
            <span class="float-right regular text-14 text-gray" v-else>
                <b-icon-calendar4/>  </span>
        </p>
        <p class="mb-3"> {{data.comment}}</p>
        <p class="nav justify-content-between text-14 text-gray mb-2">
            <span>Категорія</span>
            <span><i class="fa fa-sm" :class="data.category.icon"/> {{data.category.name}}</span>
        </p>
        <p class="nav justify-content-between text-14 text-gray">
            <span>Дата та час</span>
            <span>{{data.nextsend}}</span>
        </p>
        <div class="nav justify-content-between d-inline-flex pt-1">
            <button class="textIncome btn w-50" @click="accept" v-if="currentDate>data.nextsend">Підтвердити</button>
            <button class="textOutcome btn w-50" @click="decline">Відхилити</button>
        </div>
    </div>
</template>

<script>
    import {BIconArrowClockwise, BIconCalendar4} from "bootstrap-vue";
    import {LogState} from "@/models/entities/LogPage";

    export default {
        name: "ScheduledCard",
        components: {BIconArrowClockwise, BIconCalendar4},
        props: ['data'],
        data() {
            return {
                upcoming: LogState.UPCOMING,
            }
        },
        computed: {
            logState: function () {
                return this.$store.getters['state/logState'];
            },
            currentDate: function () {
                const date = new Date();
                const month = date.getMonth() > 8 ? (date.getMonth() + 1) + "" : "0" + (date.getMonth() + 1);
                const day = date.getDate() > 9 ? date.getDate() + "" : "0" + date.getDate();
                const hours = date.getHours() > 9 ? date.getHours() + "" : "0" + date.getHours();
                const mins = date.getMinutes() > 9 ? date.getMinutes() + "" : "0" + date.getMinutes();
                return date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ":" + mins+":00";
            }
        },
        methods: {
            accept: function () {
                this.$store.dispatch('transaction/acceptTransaction',this.data.id);
            },
            decline: function () {
                this.$store.dispatch('transaction/declineTransaction',this.data.id);
            }
        },
        updated(){
            if(this.currentDate>this.data.nextsend)
                this.accept();
        }
    }
</script>

<style scoped>
    .borderOrange {
        border: 1px solid #FE9D04;
    }
</style>