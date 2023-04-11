import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Copy from 'rollup-plugin-copy'
import SVGLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/main.scss";`
			}
		}
	},
	plugins: [Vue({}), SVGLoader()],
	build: {
		outDir: './dist',
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'SomusUIDesignSystem',
			fileName: (format) => `somus-ui-design-system.${format}.js`
		},
		rollupOptions: {
			plugins: [
				Copy({
					targets: [{ src: 'src/styles', dest: 'dist/styles' }]
				})
			],
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	}
})
