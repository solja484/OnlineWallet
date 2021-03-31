import axios from "axios";

const categoryModule = {
    namespaced: true,
    state: {
        categories: [{
            name: "test category",
            icon: "fa-university",
            outcome: true
        }],
        loading:false

    },
    getters: {
        categories: state => state.categories,
        loading:state=>state.loading

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

        }
    },
    mutations: {
        setLoading(state, load) {
            state.loading = load;
        },
        setCategories(state, data) {
            state.categories = data;
        }
    }
};

export default categoryModule;
