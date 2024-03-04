import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

function resolve(dir: string) {
  return fileURLToPath(new URL(dir, import.meta.url));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    vueJsx(),
    Icons({
      autoInstall: true,
    }),
    AutoImport({
      dts: resolve('./src/types/auto-imports.d.ts'),
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      // 指定组件位置，默认是src/components
      dirs: ['src/components', 'src/views'],
      dts: resolve('./src/types/components.d.ts'),
      extensions: ['vue'],
      deep: true,
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep', 'uiw'],
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@assets': resolve('./src/assets'),
      '@images': resolve('./src/assets/images'),
      '@styles': resolve('./src/styles'),
      '@components': resolve('./src/components'),
      '@i18n': resolve('./src/i18n'),
      '@directives': resolve('./src/directives'),
      '@filters': resolve('./src/filters'),
      '@plugins': resolve('./src/plugins'),
      '@mixins': resolve('./src/mixins'),
      '@services': resolve('./src/services'),
      '@constants': resolve('./src/constants'),
      '@store': resolve('./src/store'),
      '@views': resolve('./src/views'),
      '@layouts': resolve('./src/components/layouts'),
      '@helpers': resolve('./src/helpers'),
      '@mock': resolve('./src/mock'),
      '@router': resolve('./src/router'),
    },
  },
  css: {
    transformer: 'lightningcss',
  },
  build: {
    cssMinify: 'lightningcss',
  },
});
