export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "David van den Pol - Frontend Web Developer - Portfolio",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { name: "robots", content: "index, follow" },
            {
                hid: "description",
                name: "description",
                content:
                    "I'm a Front-end developer specialized in building exceptional digital websites. Currently, I'm concentrating on my carrier at Mooore Digital.",
            },
            { name: "format-detection", content: "telephone=no" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0",
            },
            { property: "og:locale", content: "en_US" },
            { property: "og:type", content: "website" },
            {
                property: "og:title",
                content:
                    "David van den Pol - Frontend Web Developer - Portfolio",
            },
            {
                property: "og:description",
                content:
                    "I'm a Front-end developer specialized in building exceptional digital websites. Currently, I'm concentrating on my carrier at Mooore Digital.",
            },
            { property: "og:url", content: "https://davidvandenpol.nl/" },
            {
                property: "og:site_name",
                content: "David van den Pol: Frontend Web Developer Portfolio",
            },
            { name: "twitter:card", content: "summary_large_image" },
            {
                name: "twitter:title",
                content:
                    "David van den Pol - Frontend Web Developer - Portfolio",
            },
            {
                name: "twitter:description",
                content:
                    "I'm a Front-end developer specialized in building exceptional digital websites. Currently, I'm concentrating on my carrier at Mooore Digital.",
            },
            {
                name: "twitter:image",
                content:
                    "https://davidvandenpol.nl/_nuxt/img/davidvandenpol-face.6d58ddb.svg",
            },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "canonical", href: "https://www.davidvandenpol.nl/" },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~styles/fonts/fonts.css"],

    target: "static",

    render: {
        bundleRenderer: {
            shouldPreload: (type) => {
                return ["script", "style", "font"].includes(type);
            },
        },
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss",
        "nuxt-compress",
        "@nuxtjs/router",
        "@nuxtjs/google-analytics"
    ],

    googleAnalytics: {
        id: 'UA-180796467-1'
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        // https://go.nuxtjs.dev/pwa
        "@nuxtjs/pwa",
        "nuxt-compress",
    ],

    "nuxt-compress": {
        gzip: {
            threshold: 8192,
        },
        brotli: {
            threshold: 8192,
        },
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "/",
    },

    generate: {
        routes: ["/"],
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: "en",
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            sass: {
                implementation: require("sass"),
            },
            scss: {
                implementation: require("sass"),
            },
        },
    },
};
