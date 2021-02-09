<template>
    <div>
        <Menu active="none"></Menu>
        <Header active="incomes" transactions="upcoming"></Header>
        <div class="justify-content-between align-top">
            <InfoField page="income" ></InfoField>
            <Transactions ></Transactions></div>
    </div>
</template>

<script>

    import Menu from '@/components/Basic/Menu.vue'
    import Header from '@/components/Basic/Header.vue'
    import Transactions from '@/components/Basic/Transactions.vue'
    import InfoField from "@/components/Basic/InfoField";

    export default {
        name: "Incomes",
        components: {
            InfoField,
            Menu,
            Header,
            Transactions
        }
    }
</script>

<style scoped>

</style>