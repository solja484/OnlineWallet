<template>
    <div>
        <Menu></Menu>
        <Header></Header>
        <div class="justify-content-between align-top">
            <div class="left-block">
                <NewTransaction></NewTransaction>
                <InfoField page="incomes"></InfoField>
            </div>
            <Transactions></Transactions>
        </div>
    </div>
</template>

<script>
    import Menu from '@/components/Basic/Menu.vue'
    import Header from '@/components/Basic/Header.vue'
    import Transactions from '@/components/Basic/Transactions.vue'
    import InfoField from "@/components/Basic/InfoField";
    import NewTransaction from "@/components/Forms/NewTransaction";
    import {CurrentPage} from "@/models/entities/CurrentPage";

    export default {
        name: "Incomes",
        components: {NewTransaction, InfoField, Menu, Header, Transactions},
        mounted() {
            this.$store.dispatch('state/changeCurrentPage', CurrentPage.INCOMES)
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