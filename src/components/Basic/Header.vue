<template>
    <nav class="sticky-top header justify-content-between px-5 pt-3 pb-2">
        <div class="header-left nav nav-fill">
            <router-link to="/" class="nav-link text-dark btn btn-outline-warning active-left"
                         :class="{activeLeft: active == 'outcomes',
                         inactive:active!='outcomes'}">
                Витрати
            </router-link>
            <router-link to="/incomes" class="nav-link text-dark btn btn-outline-warning"
                         :class="{activeLeft: active == 'incomes',
                         inactive:active!='incomes'}">
                Доходи
            </router-link>
            <router-link to="/statistic" class="nav-link text-dark btn btn-outline-warning disabled"
                         :class="{activeLeft: active == 'statistic',
                         inactive:active!='statistic'}">
                Статистика
            </router-link>
        </div>
        <div class="header-right nav nav-fill ">
            <a class="nav-link text-dark btn btn-outline-danger "
                         :class="{activeRight: transactions == 'upcoming',
                         inactive:transactions!='upcoming'}">Заплановані</a>
            <a class="nav-link text-dark btn btn-outline-danger "
                         :class="{activeRight: transactions == 'recent',
                         inactive:transactions!='recent'}">Журнал</a>

        </div>
    </nav>
</template>

<script>
    export default {
        name: "Header",
        props: ['active','transactions'],

    data() {
        return {
            transaction:''
        }
    }
    }
</script>

<style scoped >
    .header {
        font-size: 16px;
        margin-left: 5%;
        display: inline-flex;
        width: 95%;
        background: #FAFAFA;
        border-radius: 0 !important;
    }

    .header-left {
        font-family: 'Igra Sans' !important;
        width: 55%;
    }

    .header-right {
        font-family: "Igra Sans" !important;
        width: 35%;
    }

    .activeLeft {
        border: 2px solid #FFBF00;
    }

    .inactive {
        border:2px solid transparent;
    }

    .activeRight {
        border: 2px solid #CC0000;
    }
</style>