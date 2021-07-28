import storage from '@helpers/storage';

const TOKEN = 'AUTH_TOKEN';
const ROLE = 'AUTH_ROLE';

export default {
    namespaced: true,
    state: {
        token: storage.get(TOKEN),
        role: storage.get(ROLE)
    },
    mutations: {
        setToken(state, { token, expired }) {
            state.token = token;
            storage.set(TOKEN, token, { expired });
        },
        removeToken(state) {
            state.token = null;
            storage.remove(TOKEN);
        },
        setRole(state, role) {
            state.role = role;
            storage.set(ROLE, role);
        },
        removeRole(state) {
            state.role = null;
            storage.remove(ROLE);
        }
    }
};
