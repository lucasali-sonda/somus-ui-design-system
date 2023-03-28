import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path'
import { defineConfig } from 'vite'

import dts from 'vite-plugin-dts'
import typescript2 from 'rollup-plugin-typescript2'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		dts({
			insertTypesEntry: true
		}),
		typescript2({
			check: false,
			include: ['src/components/**/*.vue'],
			tsconfigOverride: {
				compilerOptions: {
					outDir: 'dist',
					sourceMap: true,
					declaration: true,
					declarationMap: true
				}
			},
			exclude: ['vite.config.ts']
		})
	],
	build: {
		cssCodeSplit: true,
		lib: {
			entry: 'src/components/main.ts',
			name: 'SomusUIDesignSystem',
			fileName: (format) => `somus-ui-design-system.${format}.js`
		},
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src/components/main.ts')
			},
			external: ['vue'],
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === 'main.css') return 'somus-ui-design-system.css'
					return assetInfo.name!
				},
				exports: 'named',
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
