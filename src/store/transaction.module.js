import axios from "axios";

const transactionModule = {
    namespaced: true,
    state: {
        transactions: [],
        loading: false
    },
    getters: {
        transactions: state => state.transactions,
        loading: state => state.loading
    },
    actions: {
        fetchUserTransactions({commit, rootGetters}) {
            commit('setLoading', true);
            axios.get('/api/transaction/getUserTransaction/'
                +rootGetters['state/user'].id)
                .then((res) => {
                    console.log(res);
                    commit("setTransactions", res.data)
                })
                .catch((err) => console.log(err))
                .finally(() => commit("setLoading", false));
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
