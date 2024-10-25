<template>
    <div class="w">
        <VueAuthor></VueAuthor>
        <VueBook></VueBook>
    </div>
</template>

<script>
// 作者简介
import VueAuthor from "./authorPage/VueAuthor.vue";
// 对应书籍
import VueBook from "./authorPage/VueBook.vue";
export default {
    name: "AuthorPage",
    components: {
        VueAuthor,
        VueBook,
    },
    mounted() {
        window.scrollTo(0, 0);
    },
};
</script>

<style scoped>
.w {
    background-color: #e5e5e5;
    border-radius: 20px;
    margin-bottom: 40px;
}
</style>