<template>
    <div class="bookPage">
        <div class="w">
            <BookHeader></BookHeader>
            <BookBody></BookBody>
            <BriefIntroduction></BriefIntroduction>
            <BookDirectory></BookDirectory>
        </div>
    </div>
</template>

<script>
// 书籍名字
import BookHeader from "./bookPage/BookHeader.vue";
// 书籍主体
import BookBody from "./bookPage/BookBody.vue";
// 书籍简介
import BriefIntroduction from "./bookPage/BriefIntroduction.vue";
// 书籍目录
import BookDirectory from "./bookPage/BookDirectory.vue";
export default {
    name: "BookPage",
    components: {
        BookHeader,
        BookBody,
        BriefIntroduction,
        BookDirectory,
    },
    mounted() {
        window.scrollTo(0, 0);
    },
};
</script>

<style scoped>
.bookPage {
    background-color: #f0f0f0;
    padding: 30px 0 20px;
}

.w {
    padding-bottom: 30px;
    background-color: #fff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}
</style>