<template>
    <div>
        <VueSwiper></VueSwiper>
        <VueMain></VueMain>
        <FloorBook></FloorBook>
        <FloorAuthor></FloorAuthor>
    </div>
</template>

<script>
// 首页轮播图
import VueSwiper from "./homePage/VueBanner.vue";
// 书本推荐
import VueMain from "./homePage/VueMain.vue";
// 书本楼层
import FloorBook from "./homePage/FloorBook.vue";
// 作者楼层
import FloorAuthor from "./homePage/FloorAuthor.vue";
export default {
    name: "HomePage",
    components: {
        VueSwiper,
        VueMain,
        FloorBook,
        FloorAuthor,
    },
    mounted() {
        window.scrollTo(0, 0);
    },
};
</script>

<style scoped>
div {
    background-color: #f0f0f0;
    padding-bottom: 20px;
}
</style>