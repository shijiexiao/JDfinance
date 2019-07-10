import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import ious from "../ious/index.vue"
import download from "../special/download.vue"
import raise from "../raise/index.vue"
import my from "../my/index.vue"
import "../../css/reset.scss"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },   {
            path: "/money",
            name: "money",
            component: Money,
        }, {
            path: "/ious",
            name: "ious",
            component: ious,
        },{
            path: "/raise",
            name: "raise",
            component: raise,
        },
        {
            path: "/download",
            name: "download",
            component: download,
        },

        {
            path: "/my",
            name: "my",
            component: my,
        },

    ],
})
