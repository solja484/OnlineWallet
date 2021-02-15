<template>
    <div>
        <div class="p-5 login-bg">
            <h4 class="px-2 text-center"  >Змінити пароль</h4>
            <hr class="red-line">
            <form @submit.prevent="changePassword">
                <div class="form-group">
                    <label for="old_pass" class="font-weight-bold">Старий пароль:</label>
                    <input v-model="old_pass" type="password" class="form-control col-lg-12" id="old_pass" placeholder="Password" required="required">
                </div>
                <div class="form-group">
                    <label for="new_pass" class="font-weight-bold">Новий пароль:</label>
                    <input v-model="new_pass" type="password" class="form-control col-lg-12" id="new_pass" placeholder="New password" minlength="8" required="required">
                </div>
                <div class="form-group">
                    <label for="confirm_pass" class="font-weight-bold">Підвердіть пароль:</label>
                    <input v-model="confirm_pass" type="password" class="form-control col-lg-12" id="confirm_pass" placeholder="Confirm password" minlength="8" required="required">
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
        data(){
            return {
                old_pass : "",
                new_pass : "",
                confirm_pass : ""
            }
        }, methods: {
            changePassword: function () {
                let data = {
                    old_pass: this.old_pass,
                    new_pass: this.new_pass,
                    confirm_pass: this.confirm_pass
                }
                    this.$store.dispatch('changePassword', data)
                        .then(() => this.$router.push('/'))
                        .catch(err => console.log(err))
                     //TODO: check if passwords are equal

            }
        }
    }
</script>

<style scoped>

</style>