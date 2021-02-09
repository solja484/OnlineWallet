<template>
    <div>
        <Menu active="settings"></Menu>
        <Header active="none" transactions="upcoming"></Header>
        <InfoField page="settings"></InfoField>
        <Transactions></Transactions>
    </div>
</template>

<script>
    import Menu from '@/components/Basic/Menu.vue'
    import Header from '@/components/Basic/Header.vue'
    import InfoField from "@/components/Basic/InfoField";
    import Transactions from "@/components/Basic/Transactions";

    export default {
        name: "Settings",
        components: {
            Transactions,
            InfoField,
            Menu,
            Header
        }
    }
</script>

<style scoped>

</style>