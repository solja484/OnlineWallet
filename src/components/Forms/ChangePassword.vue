<template>
    <div>
        <div class="p-5 login-bg">
            <h4 class="px-2 text-center"  >Змінити пароль</h4>
            <hr class="red-line">
            <form>
                <div class="form-group">
                    <label for="old_pass" class="font-weight-bold">Старий пароль:</label>
                    <input type="password" class="form-control col-lg-12" id="old_pass" placeholder="Password" required="required">
                </div>
                <div class="form-group">
                    <label for="new_pass" class="font-weight-bold">Новий пароль:</label>
                    <input type="password" class="form-control col-lg-12" id="new_pass" placeholder="New password" minlength="8" required="required">
                </div>
                <div class="form-group">
                    <label for="confirm_pass" class="font-weight-bold">Підвердіть пароль:</label>
                    <input type="password" class="form-control col-lg-12" id="confirm_pass" placeholder="Confirm password" minlength="8" required="required">
                </div>
                <button type="submit" class="btn btn-danger text-black float-left border-red col-lg-6 my-3">
                    Змінити пароль
                </button>

            </form>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ChangePassword"
    }
</script>

<style scoped>

</style>