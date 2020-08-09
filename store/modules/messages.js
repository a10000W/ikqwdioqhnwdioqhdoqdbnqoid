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
    }
};

const mutations = {
    ADD_MESSAGE(state, payload) {
        state.messages = [...state.messages, payload];
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
