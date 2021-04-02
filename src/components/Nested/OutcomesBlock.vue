<template>
    <div class="px-5 container " v-if="!loading">
        <div class="row w-100">
            <Category v-for="c in categories" :key="c.id" :category="c" class="text-center w-25"></Category>
        </div>
    </div>
</template>

<script>
    import Category from "@/components/Nested/Category";

    export default {
        name: "OutcomesBlock",
        components: {Category},
        computed: {
            loading: function () {
                return this.$store.getters['category/loading']
            },
            categories: function () {
                return [{"id": 1, "icon": "fas fa-shopping-basket", "outcome": true, "name": "Продукти"}, {
                    "id": 2,
                    "icon": "fa-puzzle-piece",
                    "outcome": true,
                    "name": "Розваги"
                }, {"id": 3, "icon": "fa-car", "outcome": true, "name": "Транспорт"}, {
                    "id": 4,
                    "icon": "fa-black-tie",
                    "outcome": true,
                    "name": "Одяг/Взуття"
                }, {"id": 5, "icon": "fa-heart", "outcome": true, "name": "Краса"}, {
                    "id": 6,
                    "icon": "fa-plus-square",
                    "outcome": true,
                    "name": "Медицина"
                }, {"id": 7, "icon": "fa-university", "outcome": true, "name": "Освіта"}, {
                    "id": 8,
                    "icon": "fa-home",
                    "outcome": true,
                    "name": "Житло"
                }, {"id": 9, "icon": "fa-gift", "outcome": true, "name": "Подарунки"}, {
                    "id": 10,
                    "icon": "fa-cutlery",
                    "outcome": true,
                    "name": "Ресторани"
                }, {"id": 11, "icon": "fa-suitcase", "outcome": true, "name": "Подорожі"}, {
                    "id": 12,
                    "icon": "fa-laptop",
                    "outcome": true,
                    "name": "Техніка"
                }, {"id": 13, "icon": "fa-pencil", "outcome": true, "name": "Інше"},
                    {"id": 14, "icon": "fa-credit-card", "outcome": false, "name": "Зарплата"},
                    {"id": 15, "icon": " fa-star", "outcome": false, "name": "Премія"},
                    {"id": 16, "icon": "fa-money", "outcome": false, "name": "Кишенькові"},
                    {"id": 17, "icon": " fa-graduation-cap", "outcome": false, "name": "Стипендія"},
                    {"id": 18, "icon": " fa-handshake-o", "outcome": false, "name": "Продажі"},
                    {"id": 19, "icon": " fa-pencil", "outcome": false, "name": "Інше"}]
                //this.$store.getters['category/categories'].filter(c=>c.outcome);
            }
        },
    }
</script>

<style scoped>

</style>