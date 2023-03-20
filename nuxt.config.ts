// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from "node:url";
export default defineNuxtConfig({
	alias: {
		'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
		// 'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
		// 'data': fileURLToPath(new URL('./assets/other/data', import.meta.url))
	},
	app: {
		baseURL: '/vue-aroma/',
		head: {
			meta: [
				{charset: 'utf-8'},
				{name: 'viewport', content: 'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width'},
				{name: 'format-detection', content: 'telephone=no'},
				{name: 'msapplication-tap-highlight', content: 'no'}
			]
		}
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: [
		'@/assets/css/main.scss'
	],
	plugins: [
		'@/plugins/v-clickoutside.ts'
	],
	typescript: {
		strict: true
	}
})
