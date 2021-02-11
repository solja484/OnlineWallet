<template>

    <div class="body mb-4">

        <b-button v-b-toggle.collapse-1 class="closed-spoiler px-4 input-group" variant="outlined-light">
            Нова транзакція
            <span class="icon-holder"><b-icon-plus></b-icon-plus></span>
        </b-button>
        <b-collapse id="collapse-1" class="opened-spoiler mx-0 p-0">
            <b-card class="card-body px-4">
                <form>
                    <!--TODO Bo-->
                    <button type=button class="btn btn-outline-warning m-0 text-white btn-orange btn-block">Додати
                        транзакцію
                    </button>
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
</style>