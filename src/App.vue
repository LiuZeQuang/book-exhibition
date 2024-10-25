<template>
    <div id="app">
        <VueHeader></VueHeader>
        <router-view></router-view>
        <VueFooter></VueFooter>
    </div>
</template>

<script>
// 头部
import VueHeader from "./components/VueHeader.vue";
// 底部
import VueFooter from "./components/VueFooter.vue";
// 首页
import HomePage from "./components/HomePage.vue";
// 作者简介
import AuthorPage from "./components/AuthorPage.vue";
// 书籍详情
import BookPage from "./components/BookPage.vue";
// 引入axios
import axios from "axios";
export default {
    name: "App",
    components: {
        VueHeader,
        HomePage,
        AuthorPage,
        VueFooter,
        BookPage,
    },
    mounted() {
        axios
            .get("sjk.json")
            .then((res) => {
                this.$store.commit("bookList", res.data.book);
                this.$store.commit("authorList", res.data.author);
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>

<style>
.w {
    width: 1024px;
    margin: 0 auto;
}
h4 {
    color: #551a8b;
}
h3 {
    padding: 0;
    margin: 0;
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
li {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
}
ol {
    margin: 0;
    padding: 0;
}
</style>
