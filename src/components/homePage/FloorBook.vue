<template>
    <div class="w">
        <nav>
            <h3>每日精选</h3>
            <ul>
                <li @click="li1" :class="{ active: this.enName == 1 }">
                    经典文学
                </li>
                <li @click="li2" :class="{ active: this.enName == 2 }">
                    悬疑推理
                </li>
                <li @click="li3" :class="{ active: this.enName == 3 }">
                    科幻小说
                </li>
                <li @click="li4" :class="{ active: this.enName == 4 }">
                    网络小说
                </li>
            </ul>
        </nav>
        <div class="book">
            <ul>
                <li
                    v-for="book in filteredBook"
                    :key="book.id"
                    @mouseenter="showName = book.id"
                    @mouseleave="showName = 0"
                    @click="details(book.id)"
                >
                    <a href="#/book">
                        <div class="overlay" v-show="showName == book.id">
                            <div class="name">{{ book.name }}</div>
                            <div class="intro">
                                {{ book.briefIntroduction }}
                            </div>
                            <div style="line-height: 10px; text-align: center">
                                ......
                            </div>
                        </div>
                        <img
                            :src="require(`@/assets/book/${book.cover}`)"
                            alt=""
                        />
                        <h4>{{ book.name }}</h4>
                        <h4 class="auth">{{ book.author }}</h4>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "FloorBook",
    data() {
        return {
            enName: 1,
            showName: 0,
            bookTypeT: "经典文学",
            floorBook: this.$store.state.books,
        };
    },
    methods: {
        li1() {
            this.enName = 1;
            this.bookTypeT = "经典文学";
        },
        li2() {
            this.enName = 2;
            this.bookTypeT = "悬疑推理";
        },
        li3() {
            this.enName = 3;
            this.bookTypeT = "科幻小说";
        },
        li4() {
            this.enName = 4;
            this.bookTypeT = "网络小说";
        },
        details(id) {
            let book = this.$store.state.books.find((item) => item.id == id);
            this.$store.commit("bookUP", book);
            axios.get("sjk.json").then((res) => {
                let directory = res.data.directory.find(
                    (item) => item.id == id
                );
                this.$store.commit("directory", directory.chapter);
            });
            this.$router.push("/book");
        },
    },
    computed: {
        filteredBook() {
            return this.floorBook.filter(
                (item) => item.bookType === this.bookTypeT
            );
        },
    },
};
</script>

<style scoped>
.active {
    color: #000;
    border-bottom: 3px solid red;
}

nav h3,
nav ul,
nav ul li {
    display: inline-block;
    height: 50px;
    font-size: 21px;
    padding: 0 40px;
    margin: 0 10px;
    line-height: 50px;
}

nav ul li {
    font-size: 17px;
    font-weight: 800;
    cursor: pointer;
}

.book ul {
    display: flex;
    height: 560px;
    margin-top: 10px;
    flex-wrap: wrap;
    flex: 1;
}

.book ul li {
    position: relative;
    width: 18%;
    height: 260px;
    margin: 10px;
    background-color: #fff;
    cursor: pointer;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ccc;
    color: #551a8b;
    transition: transform 0.4s;
}

.overlay:hover {
    transform: scale(1.1);
}

.name {
    text-align: center;
    font-weight: 800;
    margin: 15px 0;
}

.intro {
    text-indent: 1em;
    margin: 10px 10px 0;
    height: 170px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.book ul li .auth {
    font-size: 12px;
    color: #999;
    font-weight: 400;
}

.book h4 {
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
}

.book img {
    display: flex;
    width: 150px;
    height: 190px;
    margin: 10px auto;
}
</style>