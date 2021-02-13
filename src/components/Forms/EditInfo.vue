<template>
    <div>
        <div class="p-5 login-bg">
            <h4 class="px-2 text-center">Налаштування</h4>
            <hr class="red-line">
            <form>
                <div class="form-group">
                    <label for="change_nickname" class="font-weight-bold">Ім'я користувача</label>
                    <input type="text" class="form-control col-lg-6" id="change_nickname" placeholder="Current nickname" minlength="2">
                </div>
                <div class="form-group">
                    <label for="email" class="font-weight-bold">Електронна пошта</label>
                    <input type="email" class="form-control col-lg-6" id="email" placeholder="Current email">
                </div>
                <button type="submit" class="btn btn-warning text-black float-left border-red col-lg-6 my-3 text-white">
                    Зберегти
                </button>

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditInfo"
    }
</script>

<style scoped>

</style>