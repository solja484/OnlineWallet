<template>
    <div class="p-5 login-bg">
        <h4 class="px-2">Створити акаунт</h4>
        <hr class="red-line">
        <form>
            <label for="reg_email" class=" pt-2 text-black">Email:</label>
            <input type="text" class="form-control" id="reg_email"/>
            <label for="reg_nickname" class=" pt-2 text-black">Нікнейм:</label>
            <input type="text" class="form-control" id="reg_nickname"/>
            <label for="reg_pass" class="pt-2 text-black">Пароль:</label>
            <input type="text" class="form-control" id="reg_pass"/>
            <button type="submit" class="btn btn-outline-danger float-right  border-red my-3 px-lg-5" >Зареєструватись</button>
        </form>

    </div>
</template>

<script>
    export default {
        name: "Registry"
    }
</script>

<style scoped>

    .border-red{
        border: 2px solid #CC0000;
        color: black!important;
    }
    .login-bg{
        background: #fafafa;
        height: 80vh;
    }
    .red-line{
        border-color: #CC0000;
        border-width: 1.5px;
    }

</style>