<template>
	<nav
		aria-label="quick menu"
		class="py-3.5 bg-darkBackgroundColor z-10 bg-opacity-30"
	>
		<div class="px-2 mx-auto flex items-center container">
			<router-link class="flex z-10" to="/">
				<img
					class="nav-icon mr-2 md:mr-4"
					src="../../assets/images/davidvandenpol-face.svg"
					alt="David van den Pol face"
					loading="lazy"
				/>
				<div class="flex flex-col justify-center">
					<span class="leading-5 font-bold">David</span>
				</div>
			</router-link>
			<div class="ml-auto z-10">
				<a
					class="inline-flex mx-2 md:mx-6 text-textGray font-semibold"
					href="/"
					aria-label="View all of David van den Pol's Works"
				>
					<span bis_skin_checked="1">Works</span>
				</a>
				<a
					class="
						hidden
						sm:inline-flex
						mx-2
						md:mx-6
						text-textGray
						font-semibold
					"
					href="/"
					aria-label="Read David van den Pol's Blog"
				>
					<span bis_skin_checked="2">Blog</span>
				</a>
				<a
					class="
						hidden
						sm:inline-flex
						mx-2
						md:mx-6
						text-textGray
						font-semibold
					"
					href="/"
					aria-label="About David van den Pol"
				>
					<span bis_skin_checked="3">About me</span>
				</a>
				<a
					class="
						hidden
						sm:inline-flex
						mx-2
						md:mx-6
						text-textGray
						font-semibold
					"
					href="/"
					aria-label="Social Media of David van den Pol"
				>
					<span bis_skin_checked="4">Social Media</span>
				</a>
				<a
					class="
						inline-flex
						justify-center
						mx-2
						md:mx-6
						text-textColor
						font-bold
					"
					href="/"
					aria-label="Contact David van den Pol"
				>
					<span bis_skin_checked="4" class="mr-2">Let's Talk</span>
					<img
						src="../../assets/icons/arrow-right-icon.svg"
						alt="Let's talk"
						loading="lazy"
					/>
				</a>
			</div>
		</div>
	</nav>
</template>

<style lang="scss">
@import "./index";
</style>
