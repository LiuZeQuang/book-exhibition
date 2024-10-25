<template>
    <div class="w">
        <h3>作者</h3>
        <span></span>
        <ul>
            <li
                v-for="author in floorAuthor"
                :key="author.id"
                @mouseenter="enName = author.id"
                @mouseleave="enName = 0"
            >
                <a href="#/author" @click="AuthorTO(author.id)">
                    <div class="overlay" v-show="enName == author.id">
                        <div class="name">{{ author.name }}</div>
                        <div class="intro">
                            {{ author.briefIntroduction }}
                        </div>
                        <div style="line-height: 10px; text-align: center">
                            ......
                        </div>
                    </div>
                    <img
                        :src="require(`@/assets/author/${author.cover}`)"
                        alt=""
                    />
                    <h4>{{ author.name }}</h4>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "FloorAuthor",
    data() {
        return {
            enName: 0,
        };
    },
    methods: {
        AuthorTO(id) {
            let author = this.$store.state.authors.find(
                (item) => item.id == id
            );
            this.$store.commit("authorUP", author);
        },
    },
    computed: {
        floorAuthor() {
            return this.$store.state.authors;
        },
    },
};
</script>

<style scoped>
h3 {
    display: inline-block;
    height: 50px;
    font-size: 21px;
    padding: 10px 25px 0 50px;
    line-height: 50px;
}

span {
    display: inline-block;
    height: 1px;
    width: 880px;
    border-bottom: 1px solid #000;
    margin-bottom: 6px;
}

ul {
    display: flex;
    height: 300px;
    margin-top: 10px;
    flex: 1;
}

ul li {
    position: relative;
    width: 20%;
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

h4 {
    font-size: 14px;
    text-align: center;
    margin: 20px auto;
}

img {
    display: flex;
    width: 150px;
    height: 190px;
    margin: 10px auto;
}
</style>