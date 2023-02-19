<template>
    <Header />
        <main>
            <Hero />
            <Feature />
            <TextImage />
            <BlogSection />
        </main>
    <Footer />
</template>

<script setup>
useHead({
    title: "Front End Developer David van den Pol",
    meta: [
        {
            name: "description",
            content: "I'm a Front-end developer specialized in building exceptional digital websites. Currently, I'm concentrating on my carrier at Mooore Digital.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "keywords", content: "front end developer, front end, front end developers, front end development, david van den pol, david, van den pol, david van der pol", },
        { property: "og:locale", content: "en_US" },
        { property: "og:type", content: "website" },
        {
            property: "og:title",
            content: "Front End Developer David van den Pol",
        },
        {
            property: "og:description",
            content: "I'm a Front-end developer specialized in building exceptional digital websites. Currently, I'm concentrating on my carrier at Mooore Digital.",
        },
        { property: "og:url", content: "https://davidvandenpol.nl/" },
        {
            property: "og:site_name",
            content: "Front End Developer David van den Pol",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
            name: "twitter:title",
            content: "Front End Developer David van den Pol",
        },
        {
            name: "twitter:description",
            content: "I'm a Front-end developer specialized in building exceptional digital websites. Currently, I'm concentrating on my carrier at Mooore Digital.",
        },
        { name: "author", content: "David van den Pol" },
        { name: "robot", content: "index, follow" },
        { charset: "utf-8" },
        {
            htmlAttrs: {
                lang: "en",
            },
        },
    ],
    link: [
        {
            rel: "canonical",
            href: "https://davidvandenpol.nl",
        },
        {
            rel: "icon",
            type: "image/x-icon",
            href: "../../favicon.ico"
        }
    ],
});
</script>
