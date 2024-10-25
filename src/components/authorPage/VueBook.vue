<template>
    <ul>
        <li v-for="book in books" :key="book.id">
            <a href="#/book" @click="details(book.id)">
                <img :src="require(`@/assets/book/${book.cover}`)" alt="" />
            </a>
            <div>
                <h3>{{ book.name }}</h3>
                <h5>{{ book.author }}</h5>
                <p>
                    {{ book.briefIntroduction }}
                </p>
            </div>
        </li>
    </ul>
</template>

<script>
import axios from "axios";
export default {
    name: "VueBook",
    methods: {
        details(id) {
            let book = this.$store.state.books.find((item) => item.id == id);
            this.$store.commit("bookUP", book);
            axios.get("sjk.json").then((res) => {
                let directory = res.data.directory.find(
                    (item) => item.id == id
                );
                this.$store.commit("directory", directory.chapter);
            });
        },
    },
    computed: {
        books() {
            let bookst = [];
            this.$store.state.author.bookID.forEach((item) => {
                this.$store.state.books.filter((book) => {
                    if (book.id == item) {
                        bookst.push(book);
                    }
                });
            });
            return bookst;
        },
    },
};
</script>

<style scoped>
img {
    float: left;
    width: 135px;
    height: 180px;
    margin-right: 30px;
}
ul {
    width: 864px;
    margin: 0 auto;
}
ul li {
    height: 200px;
    padding-bottom: 30px;
}
div {
    padding-top: 10px;
}
</style>