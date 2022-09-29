import { defineConfig, presetUno, presetAttributify } from 'unocss';

export function createConfig({ dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    presets: [presetUno(), presetAttributify()],
  });
}

export default createConfig();
