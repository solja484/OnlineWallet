<template>
    <div class="body mb-4">
        <b-button v-b-toggle.collapse-1 class="closed-spoiler px-4 input-group" variant="outlined-light">
            Нова транзакція
            <span class="icon-holder"><b-icon-plus></b-icon-plus></span>
        </b-button>
        <b-collapse id="collapse-1" class="opened-spoiler mx-0 p-0">
            <b-card class="my-card-body p-1">
                <form class="transaction row p-0" @submit.prevent="newtransaction">
                    <div class="col p-0">
                        <b-form-group
                                class="mx-3 mb-3 input-group-sm"
                                label="Назва транзакції"
                                label-for="transaction-input">
                            <b-form-input id="transaction-input"
                                          v-model="transaction_name"
                                          type="text"
                                          size="sm"
                                          required></b-form-input>
                        </b-form-group>
                        <b-form-group label="Тип транзакції" class="mx-3 mb-3" v-slot="{ ariaDescribedby }">
                            <b-form-radio-group
                                    id="radio-group-2"
                                    v-model="transaction_type"
                                    :aria-describedby="ariaDescribedby">
                                <b-form-radio value="1">Витрата</b-form-radio>
                                <b-form-radio value="2">Прибуток</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>
                        <b-form-group
                                class="mx-3 mb-3 input-group-sm"
                                label="Кошти"
                                label-for="money-input">
                            <b-input-group prepend="₴" class="" size="sm">
                                <b-form-input id="money-input" v-model="transaction_sum" type="number"
                                              class="form-control "></b-form-input>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group
                                class="mx-3 mb-3 input-group-sm"
                                label="Категорія"
                                label-for="category_select">
                            <b-form-select id="category_select" v-model="category" size="sm">
                                <b-form-select-option value="null" disabled>Не обрано</b-form-select-option>
                                <b-form-select-option v-for="c in categories" :key="c.name" :value="c.name">
                                    {{c.name}}
                                </b-form-select-option>
                            </b-form-select>
                        </b-form-group>
                    </div>
                    <div class="vl"></div>
                    <div class="col">
                        <div class="px-3">
                            <b-form-group class=" mt-3 mb-2">
                                <div class="custom-control custom-switch ">
                                    <input v-model="schedule_transaction" type="checkbox"
                                           class="custom-control-input"
                                           id="remote_transaction">
                                    <label class="custom-control-label"
                                           for="remote_transaction">Відкласти транзакцію</label>
                                </div>
                            </b-form-group>
                            <b-form-group
                                    class=" input-group-sm"
                                    label="Встановити дату:"
                                    label-for="date_input">
                                <b-form-input v-model="schedule_date" type="date" id="date_input"
                                              size="sm" :disabled="!schedule_transaction"></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-checkbox
                                        v-model="repeatDate" class="mb-2 mr-sm-2 mb-sm-0"
                                        :disabled="!schedule_transaction">
                                    Повторювати щомісяця
                                </b-form-checkbox>
                            </b-form-group>
                        </div>
                    </div>
                </form>
                <div class="mt-4">
                    <button @click="newtransaction" class="btn btn-warning m-0 text-white btn-orange btn-block"
                            :disabled="transaction_name.length==0||transaction_sum==null||category==null
                    ||(schedule_transaction&&schedule_date==null)">
                        Додати транзакцію
                    </button>
                </div>
            </b-card>
        </b-collapse>
    </div>
</template>

<script>
    import {
        BCollapse, BButton, BCard, BIconPlus, BFormRadio, BFormGroup, BFormInput, BFormRadioGroup,
        BInputGroup, BFormSelect, BFormSelectOption, BFormCheckbox
    } from 'bootstrap-vue';

    export default {
        name: "NewTransaction",
        components: {
            BFormSelect, BCollapse, BButton, BCard, BIconPlus, BFormSelectOption,
            BFormRadio, BFormRadioGroup, BFormInput, BFormGroup, BInputGroup, BFormCheckbox
        },
        data() {
            return {
                transaction_type: 1,
                transaction_name: "",
                transaction_sum: "",
                category: null,
                schedule_transaction: false,
                schedule_date: null,
                repeatDate: false,
                categories: this.$store.getters['category/all'].filter(c => c.outcome)
            }
        },
        computed: {},
        methods: {
            newtransaction: function () {
                let data = {
                    comment: this.transaction_name,
                    amount: this.transaction_sum,
                    isincome: this.transaction_type==2,
                    categoryid: this.category,
                    date:new Date(),
                    schedule_transaction: this.schedule_transaction,
                    scheduledate: this.schedule_date,
                    repeat: this.repeatDate
                };
                this.$store.dispatch('transaction/newTransaction', data)

            }
        },
        watch: {
            transaction_type: function () {
                console.log(this.schedule_date);
                if (this.transaction_type == 1)
                    this.categories = this.$store.getters['category/outcomes'];
                else this.categories = this.$store.getters['category/incomes'];
            }
        }

    }
</script>

<style scoped>
    .body {
        width: 100%;
    }

    .closed-spoiler {
        border: 2px solid #E5E5E5;
        border-radius: 3px;
        width: 100%;
        background: white;
        text-align: left;
        position: relative;
    }

    .closed-spoiler:active, .closed-spoiler:focus {
        box-shadow: none !important;
    }

    .opened-spoiler {
        background: white;
        border: none;
        border-radius: 0 !important;
    }

    .my-card-body {
        background: white;
        margin: 0;
        border: none;
    }

    .btn-orange {
        background: #FE9D04;
        font-family: 'Igra Sans';
        font-size: 14px;
    }
    .btn-orange:disabled{
        background: #FE9D04;
    }
    .btn-orange:hover {
        background: #ffab02;
    }

    .icon-holder {
        position: absolute;
        top: 0;
        right: -1px;
        color: #ffffff;
        background: #93D800;
        height: 100%;
    }

    .icon-holder svg {
        height: 100% !important;
        width: auto;
    }

    .vl {
        border-left: 1px solid lightgrey;
        height: auto;
    }
</style>