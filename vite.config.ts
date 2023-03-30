import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "./src/styles/_main.scss" as *;`
			}
		}
	},
	plugins: [Vue({})],
	build: {
		outDir: './dist',
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'SomusUIDesignSystem',
			fileName: (format) => `somus-ui-design-system.${format}.js`
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
})
