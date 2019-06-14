const state = {
    user: JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token') || '',
}

const getters = {
    isAuthenticated: state => !!state.token,
    user: state => state.user,
}

const actions = {
    AUTH_LOGOUT: 'AUTH_LOGOUT',
}

const mutations = {
    AUTH_LOGOUT: 'AUTH_LOGOUT',

}

export default {
    namespaced: true,
    state,
    getters,
    mutations: {
        [mutations.AUTH_LOGOUT](state) {
            state.token = null
        },

    },

    actions: {
        [actions.AUTH_LOGOUT]
            ({commit}) {
            return new Promise((resolve) => {
                commit('AUTH_LOGOUT')

                localStorage.removeItem('user')
                localStorage.removeItem('token')

                resolve()
            })
        }

    }


}


