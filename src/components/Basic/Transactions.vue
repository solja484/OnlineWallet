<template>
    <div class="transactions-body scrollbar-gradient" v-if="!loading">
        <div v-for="t in transactions" :key="t.id">
            <TransactionCard v-if="t.schtransactionid==null" :data="t"></TransactionCard>
            <ScheduledCard v-else :data="t"></ScheduledCard>
        </div>
    </div>
    <div class="transactions-body scrollbar-gradient" v-else>
        <div class="card mb-2">
            <b-skeleton-img ></b-skeleton-img>
        </div>
        <div class="card mb-2">
            <b-skeleton-img></b-skeleton-img>
        </div>  <div class="card mb-2">
            <b-skeleton-img></b-skeleton-img>
        </div>
    </div>
</template>

<script>
    import TransactionCard from "@/components/Nested/TransactionCard";
    import ScheduledCard from "@/components/Nested/ScheduledCard";
    import {LogState} from "@/models/entities/LogPage";
    import {BSkeletonImg} from 'bootstrap-vue'

    export default {
        name: "Transactions",
        components: {ScheduledCard, TransactionCard,BSkeletonImg},
        data() {
            return {
                upcoming: LogState.UPCOMING,
                recent: LogState.RECENT,
            }
        },
        computed: {
            logState: function () {
                return this.$store.getters['state/logState'];
            },
            loading: function () {
                return this.$store.getters['transaction/loading']
            },
            transactions: function () {
                if(this.logState==this.upcoming)
                return this.$store.getters['transaction/upcoming'];
                else return this.$store.getters['transaction/recent'];
            }
        },
        mounted() {
            this.$store.dispatch('transaction/fetchUserTransactions');
        }
    }
</script>

<style >
    /*@import "../../assets/scss/colors.scss";*/
    .transactions-body {
        margin: 8% 5% 0 0;
        width: 25%;
        height: 75vh;
        top: 0;
        right: 0;
        position: fixed;
        overflow: auto;
    }

    .textOutcome {
        color: #cd0000 !important;
    }

    .textIncome {
        color: #93D800 !important;
    }

    .text-gray {
        color: #A0A0A0;
    }

    .bold {
        font-weight: bold;
    }

    .regular {
        font-weight: normal;
    }

    .text-18 {
        font-size: 18px;
    }

    .text-14 {
        font-size: 14px;
    }

    .scrollbar-gradient::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        background-color: transparent;
        border-radius: 1px;
    }

    .scrollbar-gradient::-webkit-scrollbar {

        width: 12px;
        background-color: transparent;
    }

    .scrollbar-gradient::-webkit-scrollbar-thumb {
        border-radius: 1px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        background-image: -webkit-gradient(linear, left bottom, left top, from(#cc0000), to(#FFB800));
        background-image: -webkit-linear-gradient(bottom, #cc0000 17%, #FFB800 100%);
        background-image: linear-gradient(to top, #cc0000 17%, #FFB800 100%);
    }
</style>