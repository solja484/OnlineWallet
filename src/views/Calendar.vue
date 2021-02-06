<template>
    <div>
        <Menu active="calendar"></Menu>
        <Header active="none" transactions="none"></Header>
        <div class="body px-5 pt-4 justify-content-between">
            <div class="py-3 px-5 calendar-card">
                <h2 class="sprint-header">Sprint 1</h2>
                <hr>
                <ul class="success">
                    <li>Технічне завдання</li>
                    <li>Прототип веб-застосунку</li>
                    <li>Модель бази даних</li>
                </ul>
                <ul class="empty">Розробка веб-застосунку:
                    <li>Авторизація</li>
                    <li>Реєстрація</li>
                    <li>Створення миттєвої транзакції обох типів</li>
                    <li>Редагування налаштувань користувача</li>
                </ul>
            </div>
            <div class="py-3 px-5 calendar-card">
                <h2 class="sprint-header">Sprint 2</h2>
                <hr>
                <ul class="empty">Розробка веб-застосунку:
                    <li>Створення відкладених транзакцій</li>
                    <li>Створення регулярних транзакцій</li>
                    <li>Перегляд статистики</li>
                    <li>Нагадування про відкладені транзакції</li>
                    <li>Перегляд витрачених коштів за категоріями</li>
                </ul>
                <hr>
                <a href="https://bootstrap-vue.org/docs/icons" class=" nav-link">Bootstrap icons</a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import Menu from '@/components/Basic/Menu.vue'
    import Header from '@/components/Basic/Header.vue'

    export default {
        name: "Calendar",
        components: {
            Menu,
            Header
        }
    }

</script>

<style scoped>

    .success ::marker {
        color: #93D800;
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
        margin-left: 5%;
        display: inline-flex;
        width: 95%;
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