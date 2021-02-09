<template>
    <div class="p-5 login-bg">
    <h4 class="px-2 text-white">Уже є акаунт?</h4>
    <hr class="red-line">
        <form>
            <label for="signin_login" class=" pt-2 text-white">Логін:</label>
            <input type="text" class="form-control" id="signin_login"/>
            <label for="signin_pass" class="pt-2 text-white">Пароль:</label>
            <input type="text" class="form-control" id="signin_pass"/>
            <button type="submit" class="btn btn-outline-warning float-right border-yellow my-3 px-lg-5" >Вхід</button>
        </form>

    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
.border-yellow{
    border: 2px solid #FFBF00;
    color: white!important;
}

.login-bg{
    background: rgba(255, 255, 255, 0.3);
    height: 80vh;
}
    .red-line{

    border-color: #CC0000;
    border-width: 1.5px;
}

</style>