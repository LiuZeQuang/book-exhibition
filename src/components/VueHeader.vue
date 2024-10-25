<template>
    <header>
        <div class="w">
            <a href="#/">
                <h3>书籍展评线上平台</h3>
            </a>
            <img src="@/assets/search.png" alt="" />
            <input
                type="text"
                v-model="search"
                placeholder="请输入想阅读的书籍"
            />
        </div>
        <ul>
            <li
                v-for="item in filteredData"
                :key="item.id"
                @click="details(item.id)"
            >
                {{ item.name }}
            </li>
        </ul>
    </header>
</template>

<script>
// 引入axios
import axios from "axios";
export default {
    name: "VueHeader",
    data() {
        return {
            search: "",
        };
    },
    methods: {
        details(id) {
            this.search = "";
            let book = this.$store.state.books.find((item) => item.id == id);
            this.$store.commit("bookUP", book);
            axios.get("sjk.json").then((res) => {
                let directory = res.data.directory.find(
                    (item) => item.id == id
                );
                this.$store.commit("directory", directory.chapter);
            });
            if (this.$route.path != "/book") {
                this.$router.push("/book");
            }
        },
    },
    computed: {
        filteredData() {
            return this.search
                ? this.$store.state.books.filter((item) =>
                      item.name.includes(this.search)
                  )
                : "";
        },
    },
};
</script>

<style scoped>
a {
    color: #000;
}

ul {
    position: fixed;
    width: 210px;
    left: 50%;
    margin-left: 303px;
    background-color: #fff;
    z-index: 1;
}

ul li {
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
}

ul li:hover {
    background-color: #ccc;
}

header {
    display: inline-block;
    width: 100%;
    height: 52px;
    background-color: #ccc;
}

h3 {
    display: inline-block;
    line-height: 52px;
    font-size: 15px;
}

img {
    position: relative;
    width: 16px;
    top: 3px;
    left: 881px;
}

input {
    float: right;
    height: 20px;
    width: 195px;
    margin-top: 15px;
    border-radius: 5px;
    border: 1px solid #000;
    outline: none;
    padding-left: 10px;
}
</style>