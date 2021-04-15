import axios from "axios";

const categoryModule = {
    namespaced: true,
    state: {
        categories: [],
        incomes: [],
        outcomes: [],
        expenses: [],
        loading: false
    },
    getters: {
        categories: state => state.categories,
        loading: state => state.loading,
        all: state => state.categories,
        expenses: state => state.expenses,
        incomes: state => state.incomes,
        outcomes: state => state.outcomes,
    },
    actions: {
        fetchCategories({commit,dispatch}) {
            commit("setLoading", true);
            axios
                .get('https://online-wallet-01.herokuapp.com/category/all')
                .then(res => {
                    console.log("RES",res);
                    dispatch('fetchUserExpenses',res.data).then(()=> commit("setLoading", false));
                })
                .catch((err) => console.log(err))
        },
        fetchUserExpenses({commit, rootGetters},categories) {
            axios
                .get('https://online-wallet-01.herokuapp.com/transaction/categorySum/' + rootGetters['state/user'].id)
                .then(res => {
                    commit('setUserExpenses', {categories:categories, expenses:res.data});
                })
                .catch((err) => console.log(err))
        }
    },
    mutations: {
        setLoading(state, load) {
            state.loading = load;
        },
        setUserExpenses(state, data) {
            console.log("CATEGORIES",data.categories);  console.log("EXPENSES",data.expenses);
            state.categories = data.categories.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
            state.incomes = data.categories.filter(c => c.outcome == 0);
            state.incomes.push(state.incomes.shift());
            state.outcomes = data.categories.filter(c => c.outcome == 1);
            state.outcomes.push(state.outcomes.shift());
            state.expenses = data.expenses.sort((a,b) => (a.total > b.total) ? 1 : ((b.total > a.total) ? -1 : 0));
             state.incomes.forEach(function (element) {
                 const elem=state.expenses.find(c => c.categoryid == element.id);
                 element.total = elem?elem.total:0;
            });
            state.outcomes.forEach(function (element) {
                const elem=state.expenses.find(c => c.categoryid == element.id);
                element.total = elem?elem.total:0;
            });
        }
    }
};

export default categoryModule;
