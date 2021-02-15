<template>

    <div>
        <h4 class="px-2 text-center"  >Змінити дані користувача</h4>
        <hr class="red-line">
        <div class="p-5 login-bg">
            <form>
                <div class="form-group">
                    <label for="change_nickname" class="font-weight-bold">Ім'я користувача</label>
                    <input type="text" class="form-control col-lg-12" id="change_nickname" placeholder="Current nickname" minlength="2" required="required">
                </div>
                <div class="form-group">
                    <label for="email" class="font-weight-bold">Електронна пошта</label>
                    <input type="email" class="form-control col-lg-12" id="email" placeholder="Current email" required="required">
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