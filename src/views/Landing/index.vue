<template>
    <span v-if="data === null">
        loading...
    </span>
    <div v-html="data" />
</template>

<script>
export default {
    data() {
        return {
            data: null,
        }
    },
    mounted() {
        fetch('https://davidvandenpol.nl/wordpress/wp-json/wp/v2/pages/2').then(response => response.json()).then(data => this.data = data.content.rendered);
    }
}
</script>
