export default defineNuxtConfig({
    srcDir: "src/",

    app: {
        head: {
            link: [
                {
                    rel: "preload",
                    href: "~/assets/fonts/product-sans/Product-Sans-Regular.woff2",
                },
                {
                    rel: "preload",
                    href: "~/assets/fonts/product-sans/Product-Sans-Mediums.woff2",
                },
                {
                    rel: "preload",
                    href: "~/assets/fonts/product-sans/Product-Sans-Bold.woff2",
                },
            ],
        },
    },

    css: ["~/assets/scss/global.scss"],

    components: [
        {
            path: "~/components",
            extensions: ["vue"],
        },
    ],
});
