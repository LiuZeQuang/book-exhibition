import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        books: [],
        book: {
            id: 1,
            name: "",
            author: "",
            publish: "",
            publishDate: "",
            cover: "",
            bookType: "",
            numberPage: 0,
            briefIntroduction: "",
        },
        chapter: [],
        authors: [],
        author: {
            id: 1,
            name: "",
            cover: "",
            briefIntroduction: "",
            bookID: []
        }

    },
    mutations: {
        bookList(state, book) {
            state.books.push(...book);
        },
        bookUP(state, book) {
            state.book = book;
        },
        directory(state, chapter) {
            state.chapter = chapter;
        },
        authorList(state, author) {
            state.authors.push(...author);
        },
        authorUP(state, author) {
            state.author = author;
        }
    }
})