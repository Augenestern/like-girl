import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';

// import markdown from 'vite-plugin-md';
// import Inspect from 'vite-plugin-inspect';
// import Pages from 'vite-plugin-pages'
// import mdit from 'markdown-it'
// const markdownRenderer = mdit();

// import  MarkdownItContainer from "markdown-it-container";
import hljs from 'highlight.js';
// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	// server: {
	// 	open: true,   //默认启动项目打开页面
	// 	port: 5173,   //端口号
	// 	proxy: {
	// 		"/api": {
	// 			// 匹配请求路径，
	// 			target: "http://8.130.77.88:7001/",//正式域名
	// 			changeOrigin: true,
	// 			// secure: true, // 是否https接口
	// 			ws: true, // 是否代理websockets
	// 			// rewrite: (path) => path,
	// 			rewrite: (path) => path.replace(/^\/api/, '')
	// 		},
	// 	},
	// },
	// server: {
	// 	open: true,
	// 	cors: true,
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://8.130.77.88:7001/', // 实际请求地址
	// 			changeOrigin: false,
	// 			rewrite: (path) => path.replace('/api', ""),
	// 		},
	// 	},
	// },
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/],// vue插件默认只处理.vue文件，通过该参数配置让其也处理一下.md文件
		}),
		AutoImport({
			//安装两行后你会发现在组件中不用再导入ref，reactive等
			imports: ['vue', 'vue-router'],
			//存放的位置
			dts: "src/auto-import.d.ts",
		}),
		Components({
			// 引入组件的,包括自定义组件
			// 存放的位置
			dts: "src/components.d.ts",
		}),
		//md配置
		// markdown({
		// 	markdownItOptions: {
		// 		html: true,
		// 		linkify: true,
		// 		typographer: true,
		// 		xhtmlOut: true,
		// 		highlight: (str: any, lang: any) => {
		// 			if (lang && hljs.getLanguage(lang)) {
		// 				try {
		// 					return '<pre class="hljs"><code style="background-color:rgba(0, 0, 0, 0.3);box-shadow:0px 0px 0px 8px rgba(0, 0, 0, 0.3)">' +
		// 						hljs.highlight(lang, str, true).value +
		// 						'</code></pre>';
		// 				} catch (__) {
		// 				}
		// 			}
		// 			return '<pre class="hljs"><code>' + markdownRenderer.utils.escapeHtml(str) + '</code></pre>';
		// 		}
		// 	},
		// 	wrapperClasses: 'markdown-container',
		// }),
		// Pages({
		// 	pagesDir: 'pages',
		// 	extensions: ['vue', 'md'],
		// }),
		// Inspect(),
	],
	resolve: {
		// ↓路径别名
		alias: {
			"@": resolve(__dirname, "./src")
		}
	}
})