<template>
    <div>
        <Menu active="none"></Menu>
        <Header active="incomes" transactions="upcoming"></Header>
    </div>
</template>

<script>

    import Menu from '@/components/Basic/Menu.vue'
    import Header from '@/components/Basic/Header.vue'

    export default {
        name: "Incomes",
        components: {
            Menu,
            Header
        }
    }
</script>

<style scoped>

</style>