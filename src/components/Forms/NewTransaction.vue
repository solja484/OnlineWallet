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
                                <b-form-select-option v-for="c in categories" :key="c.id" :value="c.id">
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
                                <div class="row">
                                    <b-form-input v-model="schedule_date" type="date" id="date_input"
                                                  size="sm" :disabled="!schedule_transaction"
                                                  class="col mx-2"></b-form-input>
                                    <b-form-input v-model="schedule_time" type="time" id="time_input"
                                                  size="sm" :disabled="!schedule_transaction"
                                                  class="col mx-2"></b-form-input>
                                </div>
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
                    ||(schedule_transaction&&schedule_date==null&&schedule_time==null)">
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
                schedule_time: null,
                repeatDate: false,
            }
        },
        computed: {
            categories: function () {
                if (this.transaction_type == 1)
                    return this.$store.getters['category/outcomes'];
                else return this.$store.getters['category/incomes'];
            }
        },
        methods: {
            newtransaction: function () {
                let resDate = null;
                if (this.schedule_transaction) {
                    resDate = this.schedule_date + " " + this.schedule_time + ":00";
                } else {
                    const date = new Date();
                    const month = date.getMonth() > 8 ? (date.getMonth() + 1) + "" : "0" + (date.getMonth() + 1);
                    const day = date.getDate() > 9 ? date.getDate() + "" : "0" + date.getDate();
                    const hours = date.getHours() > 9 ? date.getHours() + "" : "0" + date.getHours();
                    const mins = date.getMinutes() > 9 ? date.getMinutes() + "" : "0" + date.getMinutes();
                    resDate = date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ":" + mins + ":" + date.getSeconds();
                }
                if (this.schedule_transaction)
                    this.$store.dispatch('transaction/newScheduledTransaction', {
                        comment: this.transaction_name,
                        amount: this.transaction_sum,
                        isincome: this.transaction_type == 2,
                        category: {id: this.category},
                        user: {id: this.$store.getters['state/user'].id},
                        schedule: this.repeatDate,
                        nextsend: resDate,
                        status: 2
                    })
                        .then(this.clearForm());
                else
                    this.$store.dispatch('transaction/newTransaction', {
                        comment: this.transaction_name,
                        amount: this.transaction_sum,
                        isincome: this.transaction_type == 2,
                        category: {id: this.category},
                        user: {id: this.$store.getters['state/user'].id},
                        date: resDate,
                        scheduledTransaction:null,
                        status: 2
                    })
                        .then(this.clearForm());


            },
            clearForm: function () {
                this.transaction_type = 1;
                this.transaction_name = "";
                this.transaction_sum = "";
                this.category = null;
                this.schedule_transaction = false;
                this.schedule_date = null;
                this.schedule_time = null;
                this.repeatDate = false;
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

    .btn-orange:disabled {
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