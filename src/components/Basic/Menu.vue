<template>
    <div class="vertical-menu gradient">
        <h1 class="currency_sign"><fa-icon icon="hryvnia" /></h1>
        <h1 class="menu-icon calendar-icon"><i data-feather="calendar"></i></h1>
        <router-link to="/calendar" class="menu-icon calendar-icon"><fa-icon icon="calendar" size="lg" /></router-link>
        <router-link to="/settings" class="menu-icon settings-icon"><fa-icon icon="cog" size="lg" /></router-link>
          </div>
</template>

<script>
    import feather from 'feather-icons'

    export default {
        name: "Menu"
    }
</script>

<style scoped>
.vertical-menu{
    position:fixed;
    top:0;
    left:0;
    height:100%;
    width: 70px;
}

.gradient{
        background: linear-gradient(180deg, #FFB800 14.06%, #CC0000 100%);
}
.currency_sign{
    padding-top: 20px;
    font-size: 46px;
    font-weight: 800;
    text-align: center;
}

.menu-icon{
    color:white;
    position: fixed;
    text-align: center;
}
.menu-icon svg {
    width: 30px;
    height: 30px;
}
.exit-icon{
    bottom:50px;
}
.settings-icon{
    bottom:100px;
}
.calendar-icon{
    bottom:150px;
}

</style>