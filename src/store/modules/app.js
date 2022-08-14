import storage from '@helpers/storage';
import { defaultThemeColor, setTheme } from '@helpers/theme';

const THEME = 'THEME';

export default {
    namespaced: true,
    state: {
        theme: storage.get(THEME) ?? defaultThemeColor
    },
    getters: {
        primaryColor: (state) => state.theme.brandColor
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme;
            setTheme(theme);
            storage.set(THEME, theme);
        }
    }
};
