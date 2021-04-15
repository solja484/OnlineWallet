<template>
    <div>
        <Menu></Menu>
        <Header></Header>
        <div class="body pt-4 justify-content-between">
            <div class="py-3 px-5 calendar-card">
                <h2 class="sprint-header">Sprint 1</h2>
                <hr>
                <ul class="success">
                    <li>Технічне завдання</li>
                    <li>Прототип веб-застосунку</li>
                    <li>Модель бази даних</li>
                </ul>
                <ul class="success">Розробка веб-застосунку:
                    <li>Розробка основної фронтенд-архітектури</li>
                    <li>Розробка основної бекенд-архітектури</li>
                    <li>Заповнення бази даних</li>
                    <li>Верстка сайту</li>

                </ul>
            </div>
            <div class="py-3 px-5 calendar-card">
                <h2 class="sprint-header">Sprint 2</h2>
                <hr>
                <ul class="success">
                    Розробка веб-застосунку:
                    <li>Деплой фронтенду</li>
                    <li>Деплой бекенду</li>
                    <li>Авторизація</li>
                    <li>Наповнення бази даних інформацією</li>
                    <li>Відображення інформації з бд (коректне виконання всіх GET запитів)</li>
                    <li>Перегляд діаграм статистики</li>
                </ul>
                <ul class="inprogress">
                    <li>Виправлення багів з деплоєм фронтенду</li>
                    <li>Редагування налаштувань користувача</li>
                    <li>Створення миттєвої транзакції обох типів</li>
                    <li>Створення відкладених транзакцій</li>
                </ul>
                <ul class="empty">
                    <li>Нагадування про відкладені транзакції</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Menu from '@/components/Basic/Menu.vue'
    import Header from '@/components/Basic/Header.vue'
    import {CurrentPage} from "@/models/entities/CurrentPage";
    import {LogState} from "@/models/entities/LogPage";

    export default {
        name: "Calendar",
        components: {
            Menu,
            Header
        },
        mounted(){
            this.$store.dispatch('state/changeCurrentPage', CurrentPage.CALENDAR);
            this.$store.dispatch('state/changeLogState', LogState.IDLE);
        }
    }

</script>

<style scoped>

    .success ::marker {
        color: #93D800;
        font-size: 25px;
    }
    .inprogress ::marker {
        color: #FE9D04;
        font-size: 25px;
    }

    .empty ::marker {
        color: #E5E5E5;
        font-size: 25px;
    }

    li {
        list-style-type: square;
    }

    .body {
        margin: 6% 5% 0 10%;
        display: inline-flex;
        width: 85%;
    }

    .calendar-card {
        background: #FFF;
        width: 47%;
    }

    .sprint-header {
        font-size: 20px;
        font-weight: 800;
        font-style: normal;
        text-align: center;
    }
</style>