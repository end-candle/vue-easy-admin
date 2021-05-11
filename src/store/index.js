import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modules = {};

const requireContext = require.context('./modules', true, /\.js$/);

function normalizeName(key) {
    return key.replace(/^\.\/(.*)\.js$/, '$1').replace('/', '-');
}

requireContext.keys().forEach((key) => {
    modules[normalizeName(key)] = requireContext(key).default;
});

const store = new Vuex.Store({
    modules
});

export default store;
