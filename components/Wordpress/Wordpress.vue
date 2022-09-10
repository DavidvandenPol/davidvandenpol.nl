<template>
	<div v-html="data" />
</template>

<script>
export default {
	props: ["data"],
};
</script>

<style lang="scss">
@import "./index";
</style>
