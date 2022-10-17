<template>
	<nav aria-label="quick menu" class="py-3.5 z-10 bg-opacity-30">
		<div class="px-2 mx-auto flex items-center container">
			<router-link to="/">
				<div class="flex flex-col justify-center">
					<span class="leading-5 text-xl font-bold">David</span>
				</div>
			</router-link>
			<div class="m-auto z-10">
				<a
					class="inline-flex mx-2 md:mx-6 text-sm"
					href="/works"
					aria-label="View all of David van den Pol's Works"
				>
					<span bis_skin_checked="1">Works</span>
				</a>
				<a
					class="hidden sm:inline-flex mx-2 md:mx-6 text-sm"
					href="/blog"
					aria-label="Read David van den Pol's Blog"
				>
					<span bis_skin_checked="2">Blog</span>
				</a>
				<a
					class="hidden sm:inline-flex mx-2 md:mx-6 text-sm"
					href="/about"
					aria-label="About David van den Pol"
				>
					<span bis_skin_checked="3">About me</span>
				</a>
				<a
					class="hidden sm:inline-flex mx-2 md:mx-6 text-sm"
					href="/socialmedia"
					aria-label="Social Media of David van den Pol"
				>
					<span bis_skin_checked="4">Social Media</span>
				</a>
			</div>
			<a
				class="inline-flex justify-center mx-2 md:ml-6 text-textColor font-bold text-sm"
				href="/letstalk"
				aria-label="Contact David van den Pol"
			>
				<span bis_skin_checked="4" class="mr-2">Let's talk</span>
			</a>
		</div>
	</nav>
</template>

<style lang="scss">
@import "./index";
</style>
