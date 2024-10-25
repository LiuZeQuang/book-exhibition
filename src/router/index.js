import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        // 主页
        {
            path: "/",
            name: "HomePage",
            component: () => import("@/components/HomePage.vue")
        },
        // 作者简介
        {
            path: "/author",
            name: "AuthorPage",
            component: () => import("@/components/AuthorPage.vue")
        },
        // 书籍详情
        {
            path: "/book",
            name: "BookPage",
            component: () => import("@/components/BookPage.vue")
        }
    ]
})