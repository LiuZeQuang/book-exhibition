<template>
    <div>
        <img :src="require(`@/assets/book/${book.cover}`)" />
        <ul>
            <li>类型：{{ book.bookType }}</li>
            <li>
                作者：<a href="#/author" @click="authorTo(book.author)">
                    {{ book.author }}
                </a>
            </li>
            <li>出版社：{{ book.publish }}</li>
            <li>出版时间：{{ book.publishDate }}</li>
            <li>页数：{{ book.numberPage }}</li>
            <img
                :src="
                    like
                        ? require('@/assets/likeP.png')
                        : require('@/assets/like.png')
                "
                @click="likes"
            />
            <img
                :src="
                    uninterested
                        ? require('@/assets/uninterestedP.png')
                        : require('@/assets/uninterested.png')
                "
                @click="uninteresteds"
            />
        </ul>
    </div>
</template>

<script>
export default {
    name: "BookBody",
    data() {
        return {
            like: false,
            uninterested: false,
        };
    },
    methods: {
        likes() {
            this.like = !this.like;
            this.uninterested = false;
        },
        uninteresteds() {
            this.uninterested = !this.uninterested;
            this.like = false;
        },
        authorTo(name) {
            let author = this.$store.state.authors.find(
                (item) => item.name == name
            );
            this.$store.commit("authorUP", author);
        },
    },
    computed: {
        book() {
            return this.$store.state.book;
        },
    },
};
</script>

<style scoped>
div {
    width: 1024px;
    display: flex;
    margin: 0 auto;
}
div > img {
    height: 190px;
    width: 140px;
    padding: 0 30px 20px;
}
ul > img {
    height: 20px;
    width: 15px;
    padding: 10px 15px;
}

ul li {
    margin-top: 10px;
    font-size: 15px;
}

a {
    color: #000;
}

a:hover {
    color: green;
}
</style>