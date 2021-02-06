<template>
    <div>
        <Menu active="settings"></Menu>
        <Header active="none" transactions="upcoming"></Header>
    </div>
</template>

<script>
    import Menu from '@/components/Basic/Menu.vue'
    import Header from '@/components/Basic/Header.vue'

    export default {
        name: "Settings",
        components: {
            Menu,
            Header
        }
    }
</script>

<style scoped>

</style>