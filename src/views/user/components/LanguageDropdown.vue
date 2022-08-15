<template>
    <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
            {{ languageList[locale] }}
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item
                    v-for="(label, lang) in languageList"
                    :key="lang"
                    :command="lang"
                    >{{ label }}</el-dropdown-item
                >
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>
import i18n from '@i18n/index';
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'LanguageDropdown',
    inject: ['main'],
    data() {
        return {
            languageList: {
                'zh-cn': i18n.t('common.language.china'),
                'en-us': i18n.t('common.language.english')
            }
        };
    },
    computed: {
        ...mapState('app', ['locale'])
    },
    methods: {
        ...mapMutations('app', ['setLocale']),
        handleCommand(lang) {
            this.setLocale(lang);
            this.main.$refs.tabs.refreshCurrent();
        }
    }
};
</script>
