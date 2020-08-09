const state = () => ({
    users: [],
    colors: [
        '#780116',
        '#F2AF29',
        '#9B9987',
        '#E6AACE',
        '#000000',
        '#AD343E',
        '#783F8E',
        '#519872',
        '#DC0073',
        '#008BF8',
    ],
    activeId: null,
});

const getters = {
    getActiveUser(state) {
        return state.users.find(user => user.id === state.activeId);
    },
};

const actions = {
    setActiveUser({ commit }, id) {
        commit('SET_ACTIVE_USER', id);
    },

    createUser({ commit, state }, name) {
        // генерируем id, цвет и заполняем результат в объект пользователя
        // и добавляем результат в users

        const generated = {
            name: name,
            id: state.users.length,
            color: state.colors[Math.floor(Math.random() * state.colors.length)]
        };

        commit('ADD_USER', generated);
        return generated;
    },

    removeAllUsers({ commit }) {
        commit('SET_USERS', []);
    },
};

const mutations = {
    ADD_USER(state, payload) {
        state.users = [...state.users, payload];
    },

    SET_USERS(state, payload) {
        state.users = payload;
    },

    SET_ACTIVE_USER(state, id) {
        state.activeId = id;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
