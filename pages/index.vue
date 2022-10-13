<template>
	<div>
		<Navbar />
		<Wordpress :data="pages" />
		<Footer />
	</div>
</template>

<script>
import axios from "axios";

export default {
	async mounted() {
        await axios.get('https://davidvandenpol.nl/wordpress/wp-json/wp/v2/pages/2')
            .then(res => {
                this.$store.commit('setPages', res.data.content.rendered);
            });
    },
    async fetch({ store }) {
        return await axios.get('https://davidvandenpol.nl/wordpress/wp-json/wp/v2/pages/2')
            .then(res => {
                store.commit('setPages', res.data.content.rendered);
            });
    },
    computed: {
        pages() {
            return this.$store.state.pages;
        }
    },
};
</script>

<style lang="scss">
@import "../styles/main.scss";
</style>
