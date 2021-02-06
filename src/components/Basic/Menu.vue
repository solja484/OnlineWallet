<template>
    <div class="vertical-menu gradient">

        <h1 class="currency_sign"><fa-icon icon="hryvnia" /></h1>
        <a class=" menu-icon" href="#"><fa-icon icon="hryvnia" size="lg" /></a>
        <a class=" menu-icon" href="#"><fa-icon icon="hryvnia" /></a>
        <a class=" menu-icon" href="#"><fa-icon icon="hryvnia" /></a>
    </div>
</template>

<script>
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
    }

</style>