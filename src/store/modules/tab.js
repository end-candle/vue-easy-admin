const TAB_KEY = 'APP_TAB_LIST';

export default {
    namespaced: true,
    state: {
        tabList: JSON.parse(localStorage.getItem(TAB_KEY)) ?? []
    },
    mutations: {
        addTab(state, { fullPath: key, name, meta = {} }) {
            if (!state.tabList.some((item) => item.key === key)) {
                state.tabList.push({ key, name, ...meta });
                localStorage.setItem(TAB_KEY, JSON.stringify(state.tabList));
            }
        },
        updateTabList(state, tabList) {
            state.tabList = tabList;
            localStorage.setItem(TAB_KEY, JSON.stringify(state.tabList));
        }
    }
};
