<template>
    <div class="px-5">
        <EditInfo></EditInfo>
        <ChangePassword></ChangePassword>
    </div>
</template>

<script>
    import ChangePassword from "../Forms/ChangePassword";
    import EditInfo from "../Forms/EditInfo";

    export default {
        name: "SettingsBlock",
        components: {EditInfo, ChangePassword}
    }
</script>

<style scoped>

</style>