const TAB_KEY = 'APP_TAB_LIST';

export default {
    state: {
        tabList: JSON.parse(localStorage.getItem(TAB_KEY)) ?? []
    },
    mutations: {
        addTab(state, tab) {
            if (!state.tabList.some((item) => item.fullPath === tab.fullPath)) {
                state.tabList.push(tab);
                localStorage.setItem(TAB_KEY, JSON.stringify(state.tabList));
            }
        },
        updateTabList(state, tabList) {
            state.tabList = tabList;
            localStorage.setItem(TAB_KEY, JSON.stringify(state.tabList));
        }
    }
};
