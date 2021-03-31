import Vue from 'vue'
import Vuex, {Store} from "vuex";
import categoryModule from "@/store/category.module";
import stateModule from "@/store/state.module";
import transactionModule from "@/store/transaction.module";


Vue.use(Vuex);


const store = new Store({
    modules: {
        category: categoryModule,
        state:stateModule,
        transaction:transactionModule
    },
    state: {
        loading:false
    },
    getters: {
        loading: state => state.loading

    },
    actions: {
    },
    mutations: {
        setLoading(state, load) {
            state.loading=load;
        }
    }
});
export default store;

