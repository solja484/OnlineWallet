<template>

    <div class="body mb-4">

        <b-button v-b-toggle.collapse-1 class="closed-spoiler px-4 input-group" variant="outlined-light">
            Нова транзакція
            <span class="icon-holder"><b-icon-plus></b-icon-plus></span>
        </b-button>
        <b-collapse id="collapse-1" class="opened-spoiler mx-0 p-0">
            <b-card class="card-body px-4">
                <form>
                    <div class="row">
                        <div class="col">
                            <div >
                                <div class="form-group card card-body">
                                    <label for="transaction" >Назва транзакції</label>
                                    <input type="text" class="form-control col-lg-12" id="transaction">
                                </div>
                                <div>
                                    <label for="transaction" class="col-12">Тип транзакції</label>
                                    <div class="my-3 mx-3">
                                        <div class="form-check form-check-inline col-3">
                                            <input class="form-check-input " type="radio" name="exampleRadios" id="transaction_outcome" value="option1" checked>
                                            <label class="form-check-label" for="transaction_outcome">
                                               Витрата
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline col-3 mx-3">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="transaction_income" value="option2">
                                            <label class="form-check-label" for="transaction_income">
                                                Прибуток
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mx-3 my-3">
                                    <label for="transaction" >Кошти</label>
                                    <div class="input-group ">

                                        <div class="input-group-prepend ">
                                            <span class="input-group-text">$</span>
                                        </div>
                                        <input type="number" class="form-control col-lg-12">
                                        </div>
                                    </div>
                                </div>
                            <div >
                                <label for="transaction" class=" col-lg-12">Категорія</label>
                                <div class="btn-group float-left col-lg-12">
                                    <button type="button" class="btn btn-default dropdown-toggle border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Категорію не обрано
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <button class="dropdown-item" type="button">Категорія1</button>
                                        <button class="dropdown-item" type="button">Категорія2</button>
                                        <button class="dropdown-item" type="button">Категорія3</button>
                                    </div>
                            </div>
                            </div>

                        </div>
                        <div class="vl "></div>

                        <div class="col">
                            <div >
                                <div class="card card-body">
                                    <div class="my-3">
                                        <label for="remote_transaction" >Відкласти транзакцію</label>
                                        <div id="remote_transaction">
                                            <!-- //TODO: Soljia, pleasee add this on-off icon -->
                                        </div>
                                    </div>
                                    <div class="my-3">
                                        <form>
                                            <div class="form-group">
                                                <label for="inputDate" class="text-secondary">Встановити дату:</label>
                                                <input type="date" class="form-control" id="inputDate">
                                            </div>
                                        </form>
                                    </div>
                                    <hr>
                                    <div>
                                        <form>
                                            <div class="form-group">
                                                <label for="repeatDate" class="text-secondary">Повторювати щомісяця</label>
                                                <input type="date" class="form-control" id="repeatDate">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-3">
                        <button type=button class="btn btn-outline-warning m-0 text-white btn-orange btn-block">Додати
                            транзакцію
                        </button>
                    </div>
                </form>
            </b-card>
        </b-collapse>
    </div>
</template>

<script>
    import {BCollapse, BButton, BCard, BIconPlus} from 'bootstrap-vue';

    export default {
        name: "NewTransaction",
        components: {BCollapse, BButton, BCard, BIconPlus}
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

    .card-body {
        background: white;
        margin: 0;
        border: none;
    }

    .btn-orange {
        background: #FE9D04;
        font-family: 'Igra Sans';
        font-size: 14px;
    }

    .btn-orange:hover {
        background: #ffab02;
    }
.icon-holder{
    position: absolute;
    top: 0;
    right: -1px;
    color:#ffffff;
    background: #93D800;
    height: 100%;
}

    .icon-holder svg {
        height: 100%!important;
        width: auto;
    }
    .vl {
        border-left: 3px solid lightgrey ;
        height: 400px;

    }
</style>