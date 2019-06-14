import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './auth/loginStore'


export const store = new Vuex.Store({
    modules: {
        auth: auth,

    },
})

export default store