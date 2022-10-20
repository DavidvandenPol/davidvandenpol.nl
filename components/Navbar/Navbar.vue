<template>
	<nav aria-label="quick menu" class="py-3.5 z-10 bg-opacity-30">
		<div class="px-2 mx-auto flex items-center container">
			<NuxtLink to="/">
				<div class="flex flex-col justify-end sm:justify-center">
					<span class="leading-5 text-xl font-bold">David</span>
				</div>
			</NuxtLink>
			<div class="m-auto z-10">
				<NuxtLink
                    to="/works"
					class="inline-flex mx-2 md:mx-6 text-sm"
					aria-label="View all of David van den Pol's Works"
				>
					<span bis_skin_checked="1">Works</span>
				</NuxtLink>
				<NuxtLink
                    to="/blog"
					class="inline-flex mx-2 md:mx-6 text-sm"
					aria-label="Read David van den Pol's Blog"
				>
					<span bis_skin_checked="2">Blog</span>
				</NuxtLink>
				<NuxtLink
                    to="/about"
					class="inline-flex mx-2 md:mx-6 text-sm"
					aria-label="About David van den Pol"
				>
					<span bis_skin_checked="3">About me</span>
				</NuxtLink>
				<NuxtLink
                    to="/socialmedia"
					class="hidden sm:inline-flex mx-2 md:mx-6 text-sm"
					aria-label="Social Media of David van den Pol"
				>
					<span bis_skin_checked="4">Social Media</span>
				</NuxtLink>
			</div>
			<NuxtLink
                to="/letstalk"
				class="inline-flex justify-center mx-2 md:ml-6 text-textColor font-bold text-sm"
				aria-label="Contact David van den Pol"
			>
				<span bis_skin_checked="4" class="mr-2">Let's talk</span>
			</NuxtLink>
		</div>
	</nav>
</template>

<style lang="scss">
@import "./index";
</style>
