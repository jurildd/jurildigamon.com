export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		titleTemplate: '%s Juril Digamon - Product Designer & UI/UX Developer',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
			{ hid: 'robots', name: 'robots', content: 'index, follow' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png?v=1.0' },
		],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['@/assets/css/style.css'],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		'plugins/enable-event-bus.js',
		{ src: 'plugins/vercel-analytics.js', mode: 'client' },
	],

	loaders: {
		vue: {
			compilerOptions: {
				preserveWhitespace: false,
			},
		},
	},

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		'@nuxtjs/robots',
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Content module configuration (https://go.nuxtjs.dev/config-content)
	content: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},

	loading: {
		color: '#494B52',
		height: '5px',
	},

	pwa: {
		icon: {
			source: './static/pwa-icon.png',
		},

		robots: {
			UserAgent: '*',
			Disallow: '',
		},
	},
};
