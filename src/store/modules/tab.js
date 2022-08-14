import storage from '@helpers/storage';

const TAB_KEY = 'APP_TAB_LIST';

export default {
    namespaced: true,
    state: {
        tabList: storage.get(TAB_KEY) ?? []
    },
    mutations: {
        addTab(state, { fullPath: key, name, meta = {} }) {
            if (!state.tabList.some((item) => item.key === key)) {
                state.tabList.push({ key, name, ...meta });
                storage.set(TAB_KEY, state.tabList);
            }
        },
        updateTabList(state, tabList) {
            state.tabList = tabList;
            storage.set(TAB_KEY, state.tabList);
        }
    }
};
