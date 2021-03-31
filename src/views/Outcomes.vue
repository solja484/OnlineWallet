<template>
    <div>
        <Menu></Menu>
        <Header></Header>
        <div class="justify-content-between align-top">
            <div class="left-block">
                <NewTransaction></NewTransaction>
                <InfoField page="outcomes"></InfoField>
            </div>
            <Transactions></Transactions>
        </div>
    </div>
</template>

<script>
    import Menu from '@/components/Basic/Menu.vue'
    import Header from '@/components/Basic/Header.vue'
    import OutcomesBlock from '@/components/Nested/OutcomesBlock.vue'
    import Transactions from '@/components/Basic/Transactions.vue'
    import InfoField from "@/components/Basic/InfoField";
    import NewTransaction from '@/components/Forms/NewTransaction.vue'
    import {CurrentPage} from "@/models/entities/CurrentPage";

    export default {
        name: 'Home',
        components: {InfoField, Menu, Header, OutcomesBlock, Transactions, NewTransaction},
        mounted() {
            this.$store.dispatch('state/changeCurrentPage', CurrentPage.OUTCOMES)
        }
    }
</script>

<style scoped>
    .left-block {
        margin: 8% 0 0 10%;
        float: left;
        width: 55%;
    }
</style>
