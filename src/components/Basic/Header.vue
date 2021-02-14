<template>
    <nav class=" header justify-content-between ">
        <div class="header-left nav nav-fill">
            <router-link to="/" class="nav-link text-dark btn btn-outline-warning active-left header-item"
                         :class="{activeLeft: active == 'outcomes',
                         inactive:active!='outcomes'}">
                Витрати
            </router-link>
            <router-link to="/incomes" class="nav-link text-dark btn btn-outline-warning header-item"
                         :class="{activeLeft: active == 'incomes',
                         inactive:active!='incomes'}">
                Доходи
            </router-link>
            <router-link to="/statistic" class="nav-link text-dark btn btn-outline-warning header-item"
                         :class="{activeLeft: active == 'statistic',
                         inactive:active!='statistic'}">
                Статистика
            </router-link>
        </div>
        <div class="header-right nav nav-fill " v-if="transactions!='none'">
            <a class="nav-link text-dark btn btn-outline-danger header-item"
                         :class="{activeRight: transactions == 'upcoming',
                         inactive:transactions!='upcoming'}">Заплановані</a>
            <a class="nav-link text-dark btn btn-outline-danger header-item"
                         :class="{activeRight: transactions == 'recent',
                         inactive:transactions!='recent'}">Журнал</a>

        </div>
    </nav>
</template>

<script>
    export default {
        name: "Header",
        props: ['active','transactions']
    }
</script>

<style scoped >
    .header {
        font-size: 12px;
        margin-left: 5%;
        padding: 2% 5% 1% 5%;
        display: inline-flex;
        width: 95%;
        background: #FAFAFA;
        border-radius: 0 !important;
        position: fixed;
        z-index: 2;
    }

    .header-left {
        font-family: 'Igra Sans' !important;
        width: 60%;
    }

    .header-right {
        font-family: "Igra Sans" !important;
        width: 29.5%;
    }

    .header-item{
        font-size: 12px;
        border:2px solid transparent;
    }
    .activeLeft {
        border-color: #FFBF00;
    }

    .inactive {
        border-color:transparent;
    }

    .activeRight {
        border-color: #CC0000;
    }
</style>