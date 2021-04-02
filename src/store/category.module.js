import axios from "axios";

const categoryModule = {
    namespaced: true,
    state: {
        categories: [],
        expenses:[],
        loading:false
    },
    getters: {
        categories: state => state.categories,
        loading:state=>state.loading,
        all:state=>state.categories,
        expenses:state=>state.expenses
    },
    actions: {
        fetchCategories({commit}) {
            commit("setLoading", true);
            axios
                .get('/api/category/all')
                .then(res => {
                    commit('setCategories', res.data);
                    console.log(res.data)
                })
                .catch((err) => console.log(err))
                .finally(() => commit("setLoading",false));
        },
        fetchUserExpenses({commit,rootGetters}){
            commit("setLoading", true);
            axios
                .get('/api/transaction/categorySum/'+rootGetters['state/user'].id)
                .then(res => {
                    commit('setUserExpenses', res.data);
                    console.log(res.data)
                })
                .catch((err) => console.log(err))
                .finally(() => commit("setLoading",false));
        }
    },
    mutations: {
        setLoading(state, load) {
            state.loading = load;
        },
        setCategories(state, data) {
            state.categories = data;
        },
        setUserExpenses(state,data){
            state.expenses=data;
        }
    }
};

export default categoryModule;
