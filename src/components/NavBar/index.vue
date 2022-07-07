<template>
	<nav
        aria-label="quick menu"
        class="py-8 bg-darkBackgroundColor bg-opacity-40"
    >
		<div class="px-2 mx-auto flex items-center container ">
            <router-link class="flex" to="/">
                <img
                    class="mr-4"
                    src="../../assets/images/davidvandenpol-face.svg"
                    alt="David van den Pol face"
                >
                <div class="flex flex-col justify-center">
                    <span class="text-xl leading-4 font-bold">
                        David
                    </span>
                    <span class="text-xs font-semibold leading-5 text-textGray">
                        Personal
                    </span>
                </div>
            </router-link>
            <div class="ml-auto">
                <router-link
                    class="inline-flex mx-2 md:mx-6 text-textGray font-semibold"
                    to="/"
                    aria-label="View all of David van den Pol's Works"
                >
                    <span bis_skin_checked="1">
                        Works
                    </span>
                </router-link>
                <router-link
                    class="hidden sm:inline-flex mx-2 md:mx-6 text-textGray font-semibold"
                    to="/"
                    aria-label="Read David van den Pol's Blog"
                >
                    <span bis_skin_checked="2">
                        Blog
                    </span>
                </router-link>
                <router-link
                    class="hidden sm:inline-flex mx-2 md:mx-6 text-textGray font-semibold"
                    to="/"
                    aria-label="About David van den Pol"
                >
                    <span bis_skin_checked="3">
                        About me
                    </span>
                </router-link>
                <router-link
                    class="hidden sm:inline-flex mx-2 md:mx-6 text-textGray font-semibold"
                    to="/"
                    aria-label="Social Media of David van den Pol"
                >
                    <span bis_skin_checked="4">
                        Social Media
                    </span>
                </router-link>
                <router-link
                    class="inline-flex justify-center mx-2 md:mx-6 text-textColor font-bold"
                    to="/"
                    aria-label="Contact David van den Pol"
                >
                    <span bis_skin_checked="4" class="mr-2">
                        Let's Talk
                    </span>
                    <img src="../../assets/icons/arrow-right-icon.svg" alt="Let's talk">
                </router-link>
            </div>
        </div>
        <img class="background-image" src="../../assets/images/background-galaxy.png" alt="Galaxy">
	</nav>
</template>

<style lang="scss">
    @import "index";
</style>
