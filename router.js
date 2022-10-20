import Vue from "vue";
import Router from "vue-router";

import Home from "~/pages/index.vue";
import About from "~/pages/About/index.vue";
import Blog from "~/pages/Blog/index.vue";
import LetsTalk from "~/pages/Letstalk/index.vue";
import Portfolio from "~/pages/Portfolio/index.vue";
import SocialMedia from "~/pages/SocialMedia/index.vue";
import Works from "~/pages/Works/index.vue";

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: "history",
        routes: [
            {
                path: "/",
                component: Home,
            },
            {
                path: "/about",
                component: About,
            },
            {
                path: "/blog",
                component: Blog,
            },
            {
                path: "/letstalk",
                component: LetsTalk,
            },
            {
                path: "/portfolio",
                component: Portfolio,
            },
            {
                path: "/socialmedia",
                component: SocialMedia,
            },
            {
                path: "/works",
                component: Works,
            },
        ],
    });
}
