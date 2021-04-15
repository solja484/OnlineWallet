import axios from "axios";

const transactionModule = {
    namespaced: true,
    state: {
        transactions: [],
        upcoming: [],
        loading: false
    },
    getters: {
        transactions: state => state.transactions,
        loading: state => state.loading,
        upcoming: state => state.upcoming,
        recent(state) {
            let date = new Date();
            let month = date.getMonth() > 8 ? (date.getMonth() + 1) + "" : "0" + (date.getMonth() + 1);
            let day = date.getDate > 8 ? date.getDate() + "" : "0" + date.getDate();
            let sqldate = date.getFullYear() + '-' + month + '-' + day + ' ' + date.getHours() + ":" + date.getMinutes() + ":30";
            return state.transactions.filter(t => t.date <= sqldate);
        }
    },
    actions: {
        fetchUserTransactions({commit, rootGetters}) {
            commit('setLoading', true);
            axios.get('https://online-wallet-01.herokuapp.com/transaction/getUserTransaction/'
                + rootGetters['state/user'].id)
                .then((res) => {
                    console.log(res.data);
                    commit("setTransactions", res.data)
                })
                .catch((err) => console.log(err))
                .finally(() => commit("setLoading", false));
        },
        fetchUpcomingTransactions({commit, rootGetters}) {
            commit('setLoading', true);
            console.log("userid", rootGetters['state/user'].id);
            axios.get('https://online-wallet-01.herokuapp.com/scheduletran/getUserTransaction/'
                + rootGetters['state/user'].id)
                .then((res) => {
                    console.log(res.data);
                    commit("setUpcomingTransactions", res.data)
                })
                .catch((err) => console.log(err))
                .finally(() => commit("setLoading", false));
        },
        newTransaction({commit, rootGetters, dispatch}, data) {
            commit('setLoading', true);
            data['userid'] = rootGetters['state/user'].id;
            axios
                .post('https://online-wallet-01.herokuapp.com/transaction', data)
                .then(() =>
                    dispatch('fetchUserTransactions')
                ).catch((err) => console.log(err))
                .finally(commit('setLoading', false));
        },
        declineTransaction({dispatch}, id) {
            axios
                .get('https://online-wallet-01.herokuapp.com/scheduletran/decline/' + id)
                .then(() => dispatch('fetchUpcomingTransactions'))
        },
        acceptTransaction({dispatch}, id) {
            axios
                .get('https://online-wallet-01.herokuapp.com/scheduletran/accept/' + id)
                .then(() => dispatch('fetchUpcomingTransactions'))
        }
    },
    mutations: {
        setLoading(state, load) {
            state.loading = load;
        },
        setTransactions(state, data) {
            state.transactions = data;
        },
        setUpcomingTransactions(state, data) {
            state.upcoming = data;
        }
    }
};

export default transactionModule;
