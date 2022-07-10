<template>
    <div>
        <Navbar/>
        <div class="container mx-auto">
            <Header :data="data"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: null,
        }
    },
    async mounted() {
        await fetch('https://davidvandenpol.nl/wordpress/wp-json/wp/v2/pages/2').then(response => response.json()).then(data => this.data = data.content.rendered);
    },
}
</script>

<style lang="scss">
    @import '../styles/main.scss';
</style>
