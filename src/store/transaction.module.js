import axios from "axios";

const transactionModule = {
    namespaced: true,
    state: {
        transactions: [],
        upcoming: [],
        recent:[],
        loading: false
    },
    getters: {
        transactions: state => state.transactions,
        loading: state => state.loading,
        upcoming: state => state.upcoming,
        recent:state=>state.recent
    },
    actions: {
        fetchUserTransactions({commit, rootGetters}) {
            commit('setLoading', true);
            axios.get('https://online-wallet-01.herokuapp.com/transaction/getUserTransaction/'
                + rootGetters['state/user'].id)
                .then((res) =>   commit("setTransactions", res.data))
                .catch((err) => console.log(err))
                .finally(() => commit("setLoading", false));
        },
        fetchUpcomingTransactions({commit, rootGetters}) {
            commit('setLoading', true);
            axios.get('https://online-wallet-01.herokuapp.com/scheduletran/getUserTransaction/'
                + rootGetters['state/user'].id)
                .then((res) => commit("setUpcomingTransactions", res.data))
                .catch((err) => console.log(err))
                .finally(() => commit("setLoading", false));
        },
        newTransaction({commit, rootGetters, dispatch}, data) {
            commit('setLoading', true);
            axios
                .post('https://online-wallet-01.herokuapp.com/transaction', data)
                .then(() =>
                    dispatch('fetchUserTransactions')
                ).catch((err) => console.log(err))
                .finally(commit('setLoading', false));
        },
        newScheduledTransaction({commit, rootGetters, dispatch}, data) {
            commit('setLoading', true);
            axios
                .post('https://online-wallet-01.herokuapp.com/scheduletran', data)
                .then(() =>
                    dispatch('fetchUpcomingTransactions')
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
            state.recent = data;
        },
        setUpcomingTransactions(state, data) {
            state.upcoming = data;
        }
    }
};

export default transactionModule;
