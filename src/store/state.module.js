import {CurrentPage} from "@/models/entities/CurrentPage";
import {LogState} from "@/models/entities/LogPage";
import axios from "axios";

const stateModule = {
    namespaced: true,
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {"id":1,"password":"","login":"","balance":100.0,"name":"Andry"},
        currentPage: CurrentPage.OUTCOMES,
        logState: LogState.UPCOMING,
    },
    getters: {
        isLoggedIn: state => !!state.token,
        status: state => state.status,
        user:state=>state.user,
        token:state=>state.token,
        currentPage: state => state.currentPage,
        logState: state => state.logState,

    },
    actions: {
        login({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios({url: 'http://localhost:8080/auth', data: user, method: 'POST'})
                    .then(resp => {
                        const token = resp.data.token;
                        const user = resp.data.user;
                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = token;
                        commit('auth_success', token, user);
                        resolve(resp)

                    })
                    .catch(err => {
                        commit('auth_error');
                        localStorage.removeItem('token');
                        reject(err)
                    })
            })
        },
        register({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios({url: 'http://localhost:8080/auth', data: user, method: 'POST'})
                    .then(resp => {
                        const token = resp.data.token;
                        const user = resp.data.user;
                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = token;
                        commit('auth_success', token, user);
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err);
                        localStorage.removeItem('token');
                        reject(err)
                    })
            })
        },
        transaction({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios({url: 'http://localhost:8080/main', data: user, method: 'POST'})
                    .then(resp => {
                        const token = resp.data.token;
                        const user = resp.data.user;
                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = token;
                        commit('auth_success', token, user);
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err);
                        localStorage.removeItem('token');
                        reject(err)
                    })
            })
        },
        changeName({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios({url: 'http://localhost:8080/settings', data: user, method: 'POST'})
                    .then(resp => {
                        const token = resp.data.token;
                        const user = resp.data.user;
                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = token;
                        commit('auth_success', token, user);
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err);
                        localStorage.removeItem('token');
                        reject(err)
                    })
            })
        },
        changePassword({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios({url: 'http://localhost:8080/settings', data: user, method: 'POST'})
                    .then(resp => {
                        const token = resp.data.token;
                        const user = resp.data.user;
                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = token;
                        commit('auth_success', token, user);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('auth_error', err);
                        localStorage.removeItem('token');
                        reject(err);
                    })
            })
        },
        changeCurrentPage({commit}, currentPage) {
            commit("setCurrentPage", currentPage);
        },
        changeLogState({commit}, newLogState) {
            commit("setLogState", newLogState);
        },
    },
    mutations: {
        setCurrentPage(state, currentPage) {
            state.currentPage = currentPage;
        },
        setLogState(state, newLogState) {
            state.logState = newLogState;
            console.log(state.logState);
        },
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success';
            state.token = token;
            state.user = user;
            state.currentPage = CurrentPage.OUTCOMES;
            state.logState = LogState.UPCOMING;
        },
        auth_error(state) {
            state.status = 'error';
        },
        logout(state) {
            state.status = '';
            state.token = '';
            state.currentPage = CurrentPage.AUTH;
            state.logState = LogState.IDLE;
        }
    }
};

export default stateModule;
