/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      imports: [
        'vue', // ref, reactive, computed, watch 등
        'vue-router', // useRoute, useRouter 등
        '@vueuse/core', // useDark, useMouse 등 (선택)
        'pinia',
      ],
      dts: 'src/auto-imports.d.ts', // 타입 자동 생성
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,

    watch: {
      usePolling: true,
      interval: 300, // ms (기본 1000보다 빠르게)
    },

    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
  },
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.spec.ts'],
  },
})
