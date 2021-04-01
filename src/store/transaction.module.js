import axios from "axios";

const transactionModule = {
    namespaced: true,
    state: {
        transactions: [],
        loading: false
    },
    getters: {
        transactions: state => state.transactions,
        loading: state => state.loading,
        upcoming(state) {
            let date = new Date();
            let month = date.getMonth() > 8 ? (date.getMonth() + 1) + "" : "0" + (date.getMonth() + 1);
            let day = date.getDate > 8 ? date.getDate() + "" : "0" + date.getDate();
            let sqldate = date.getFullYear() + '-' + month + '-' + day + ' ' + date.getHours() + ":" + date.getMinutes() + ":30";
            return state.transactions.filter(t => t.date > sqldate);
        },
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
            axios.get('/api/transaction/getUserTransaction/'
                + rootGetters['state/user'].id)
                .then((res) => {
                    console.log(res);
                    commit("setTransactions", res.data)
                })
                .catch((err) => console.log(err))
                .finally(() => commit("setLoading", false));
        },
        newTransaction({commit, rootGetters, dispatch}, data) {
            commit('setLoading', true);
            data['userid'] = rootGetters['state/user'].id;
            axios.post('/api/transaction/new', data).then(() =>
                dispatch('fetchUserTransactions')
            ).catch((err) => console.log(err))
                .finally(commit('setLoading', false));
        }
    },
    mutations: {
        setLoading(state, load) {
            state.loading = load;
        },
        setTransactions(state, data) {
            state.transactions = data;
        }
    }
};

export default transactionModule;
