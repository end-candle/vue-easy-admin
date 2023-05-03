// uno.config.ts
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno()],
  theme: {
    colors: {
      primary: 'var(--el-color-primary)'
    }
  }
});
