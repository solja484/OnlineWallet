<template>
        <div class="px-2 py-4 login-bg">
            <form @submit.prevent="changeName">
                <div class="form-group">
                    <label for="change_nickname" class="font-weight-bold">Ім'я користувача</label>
                    <input v-model="name" type="text" class="form-control col-lg-12" id="change_nickname" minlength="2" required="required">
                </div>
                <div class="form-group">
                    <label for="email" class="font-weight-bold">Логін(Електронна пошта)</label>
                    <input v-model="login" type="text" class="form-control col-lg-12" id="email" required="required">
                </div>
                <button type="submit" class="btn btn-warning text-black border-red col-lg-6 my-3 text-white">
                    Зберегти
                </button>

            </form>
        </div>
</template>

<script>
    export default {
        name:"EditInfo",
        data(){
            return {
                name : this.$store.getters['state/user'].name,
                login : this.$store.getters['state/user'].login,
            }
        }, methods: {
            changeName: function () {
                let data = {
                    name: this.name,
                    email: this.email,
                };
                this.$store.dispatch('state/changeName', data)
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>