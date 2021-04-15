<template>
    <div class="body mb-4" v-if="!loading">
        <p v-if="page=='settings'" class="bold px-5 pt-3 pb-0 text-center">Налаштування</p>
        <p v-else class="nav bold justify-content-between px-5 pt-3 pb-0"><span>Поточний бюджет</span><span>₴{{balance}}</span>
        </p>
        <hr class="line mx-4 my-2">
        <IncomesBlock v-if="page=='incomes'"></IncomesBlock>
        <OutcomesBlock v-if="page=='outcomes'"></OutcomesBlock>
        <StatisticsBlock v-if="page=='stats'"></StatisticsBlock>
        <SettingsBlock v-if="page=='settings'"></SettingsBlock>
    </div>
    <div v-else class="w-100">
        <b-skeleton-img class="w-100 h-75"></b-skeleton-img>
    </div>
</template>

<script>
    import OutcomesBlock from "@/components/Nested/OutcomesBlock";
    import StatisticsBlock from "@/components/Nested/StatisticsBlock";
    import IncomesBlock from "@/components/Nested/IncomesBlock";
    import SettingsBlock from "@/components/Nested/SettingsBlock";
    import {BSkeletonImg} from 'bootstrap-vue'

    export default {
        name: "InfoField",
        components: {SettingsBlock, IncomesBlock, StatisticsBlock, OutcomesBlock,BSkeletonImg},
        props: ['page'],
        computed:{
            balance:function(){
                return this.$store.getters['state/user'].balance
            },
            loading:function () {
                return this.$store.getters['category/loading'];
            }
        },
        mounted(){
            this.$store.dispatch('category/fetchCategories');
         //   this.$store.dispatch('state/updateBalance');
        }
    }

</script>

<style >
    .body {
        background: #FFF;
        width: 100%;
    }

    .bold {
        font-weight: bold;
    }

    .line {
        border-color: #FE9D04;
        border-width: 1.5px;
    }

</style>