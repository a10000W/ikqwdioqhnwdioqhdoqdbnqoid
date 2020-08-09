const state = () => ({
    messages: [],
});

const actions = {
    createMessage({ state, commit }, { text, user }) {
        const msg = {
            id: state.messages.length,
            text: text,
            user: user,
            timestamp: +new Date
        };
        commit('ADD_MESSAGE', msg);
    },

    removeAllMessages({ commit }) {
        commit('SET_MESSAGES', []);
    },
};

const mutations = {
    ADD_MESSAGE(state, payload) {
        state.messages = [...state.messages, payload];
    },

    SET_MESSAGES(state, payload) {
        state.messages = payload;
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
