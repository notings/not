import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        // Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        author: 'lon',
        search: {
            value: ''
        }
    },
    getters: {
        getAuthor(state) {
            return state.search
        }
    },
    mutations: {
        setAuthor(state, data) {
            state.search = data
        },
        // 修改token，并将token存入localStorage
        // changeLogin(state, user) {
        //     state.Authorization = user.Authorization;
        //     localStorage.setItem('Authorization', user.Authorization);
        // }
    },
    actions: {
        setAuthor(context, data) {
            context.commit('setAuthor', data)
        }
    },
})

// export default store;