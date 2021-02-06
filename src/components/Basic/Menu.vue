<template>
    <div class="vertical-menu gradient">
        <h1 class="currency_sign">
            <fa-icon icon="hryvnia"></fa-icon>
        </h1>
        <router-link to="/calendar" class="menu-icon calendar-icon"
                     :class="{menuIconActive: active == 'calendar'}">
            <b-icon-calendar4-week/>
        </router-link>
        <router-link to="/settings" class="menu-icon settings-icon"
                     :class="{menuIconActive: active == 'settings'}">
            <b-icon-gear/>
        </router-link>
        <router-link to="/exit" class="menu-icon exit-icon">
            <b-icon-box-arrow-right/>
        </router-link>
    </div>
</template>

<script>
    import {BIconBoxArrowRight, BIconCalendar4Week, BIconGear} from 'bootstrap-vue'

    export default {
        name: "Menu",
        components: {
            BIconBoxArrowRight,
            BIconCalendar4Week,
            BIconGear
        },
        props: ['active']

    }
</script>

<style scoped>
    .vertical-menu {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 5%;
        border-radius: 0!important;
    }

    .gradient {
        background: linear-gradient(180deg, #FFB800 14.06%, #CC0000 100%);
    }

    .currency_sign {
        padding-top: 20px;
        font-size: 46px;
        font-weight: 800;
        text-align: center;
    }

    .menu-icon {
        width: 5%;
        padding-top: 10px;
        padding-bottom: 10px;
        position: fixed;
        color: black;
        text-align: center;
    }

    .menuIconActive {
        color: white;
        background: rgba(255, 255, 255, 0.3)!important;
    }

    .menu-icon svg {
        width: 40%;
        height: 40%;
    }

    .exit-icon {
        bottom: 50px;
    }

    .settings-icon {
        bottom: 100px;
    }

    .calendar-icon {
        bottom: 150px;
    }

</style>