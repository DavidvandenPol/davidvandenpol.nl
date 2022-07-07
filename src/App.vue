<template>
    <main>
        <header>
            <NavBar />
        </header>
        <body class="px-2 container mx-auto">
            <router-view />
        </body>
    </main>
</template>

<script>
import NavBar from "../src/components/NavBar/index.vue";

export default {
    components: {
        NavBar
    }
}
</script>
