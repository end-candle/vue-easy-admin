import storage from '@helpers/storage';
import { defaultThemeColor, setTheme } from '@helpers/theme';
import i18n from '@i18n/index';

export const THEME = 'THEME';
export const LOCALE = 'LOCALE';

export default {
    namespaced: true,
    state: {
        theme: storage.get(THEME) ?? defaultThemeColor,
        locale: storage.get(LOCALE) ?? 'zh-cn'
    },
    getters: {
        primaryColor: (state) => state.theme.brandColor
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme;
            setTheme(theme);
            storage.set(THEME, theme);
        },
        setLocale(state, locale) {
            state.locale = locale;
            i18n.locale = locale;
            storage.set(LOCALE, locale);
        }
    }
};
