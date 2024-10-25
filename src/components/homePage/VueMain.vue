<template>
    <div class="w">
        <ul>
            <li
                v-for="book in Booklist"
                :key="book.id"
                @mouseenter="enName = book.id"
                @mouseleave="enName = 0"
                @click="details(book.id)"
            >
                <a href="#/book">
                    <div class="overlay" v-show="enName == book.id">
                        <div class="name">{{ book.name }}</div>
                        <div class="intro">
                            {{ book.briefIntroduction }}
                        </div>
                        <div style="line-height: 10px; text-align: center">
                            ......
                        </div>
                    </div>
                    <img :src="require(`@/assets/book/${book.cover}`)" alt="" />
                    <h4>{{ book.name }}</h4>
                    <h4 class="auth">{{ book.author }}</h4>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "VueMain",
    data() {
        return {
            enName: 0,
            Booklist: [
                {
                    id: 1,
                    name: "活着",
                    author: "余华",
                    cover: "1.jpg",
                    briefIntroduction:
                        "同名电影《活着》由张艺谋执导，葛优、巩俐两大影帝影后主演，1994年该片在第47届戛纳电影节上斩获评委会大奖、最佳男演员奖，同时还荣获了英国电影学院奖最佳外语片等重要奖项。由《活着》改编的电视剧《富贵》2005年开播，在第13届上海电视节上，摘得“白玉兰”奖——电视剧评委会大奖。《活着》是一篇读起来让人感到沉重的小说。那种只有阖上书本才会感到的隐隐不快，并不是由作品提供的故事的残酷造成的。毕竟，作品中的亡家，丧妻，失女以及白发人送黑发人这样的故事并不具备轰动性。同时，余华也不是一个具有很强煽动能力的作家，实际上，渲染这样的表达方式是余华一直所不屑的。余华所崇尚的只是叙述，用一种近乎冰冷的笔调娓娓叙说一些其实并不正常的故事。而所有的情绪就是在这种娓娓叙说的过程中中悄悄侵入读者的阅读。这样说来，《活着》以一种渗透的表现手法完成了一次对生命意义的哲学追问。本书荣获意大利格林扎纳·卡佛文学奖（1998年）、台湾《中国时报》十本好书奖（1994年），香港“博益”15本好书奖（1990年），中华图书特殊贡献奖（2005年），法国国际信使外国小说奖（2008年）；并入选香港《亚洲周刊》评选的“20世纪中文小说百年百强”；入选中国百位批评家和文学编辑评选的“九十年代最有影响的10部作品”，余华本人则于2004年荣获法兰西文学和艺术骑士勋章。",
                },
                {
                    id: 2,
                    name: "宋词洗冤笔记",
                    author: "巫童",
                    cover: "2.jpg",
                    briefIntroduction:
                        "【宋朝+古代探案+仕途权斗】年度国产悬疑!本书特点:案件多，尸体多，慎入!为死者言，为生者权，了解宋慈，绝大多数人都读这本!如果你看过《大宋提刑官》《神探狄仁杰》《少年包青天》《御赐小仵作》，一定不要错过这本大作。大宋版《犯罪现场调查》+少年版《大宋提刑官》! 每个案件独立成篇，逻辑严密，层层铺垫，环环相扣，反转反转再反转!烧脑、刺激、好看!太学岳祠案、西湖沉尸案、骷髅爬坡案等十多起案件，烧死、勒死、服毒、溺水等二十多种死法，验伤、验尸、验骨等五十多项检验手段…….跟随法医学鼻祖宋慈，抽丝剥茧，调查案件背后的真相，找出真凶!《长夜难明》作者紫金陈，《暗黑者》作者周浩晖，《十宗罪》作者蜘蛛，《唐朝诡事录》原著作者、编剧魏风华力荐!",
                },
                {
                    id: 3,
                    name: "兄弟",
                    author: "余华",
                    cover: "3.jpg",
                    briefIntroduction:
                        "余华作品，被誉为中国的弥尔顿《失乐园》，荣获法国国际信使外国小说奖，入选瑞士《时报》2000年至2010年这10年来全球最为重要的15本书。讲述了江南小镇两兄弟李光头和宋钢的人生。李光头的父亲不怎么光彩地意外身亡，而同一天李光头出生。宋钢的父亲宋凡平在众人的嘲笑声中挺身而出，帮助了李光头的母亲李兰，被后者视为恩人。几年后宋钢的母亲也亡故，李兰和宋凡平在互相帮助中相爱并结婚。虽然这场婚姻遭到了镇上人们的鄙夷和嘲弄，但两人依然相爱甚，而李光头和宋钢这对没有血缘关系的兄弟也十分投缘，他们在相互照顾中成长....本书荣获法国国际信使外国小说奖(2008年)，入选瑞士《时报》2000年至2010年这10年来全球最为重要的15本书.",
                },
                {
                    id: 4,
                    name: "南京大屠杀",
                    author: "巫童",
                    cover: "4.jpg",
                    briefIntroduction:
                        "-部令国人流泪的书.1937年12月，日军攻入中国古都南京。几周之内，30多万中国平民和士兵遭到有计划地强暴、折磨和屠杀--死亡人数超过广岛和长崎原子弹爆炸遇难人数的总和。 张纯如不仅在书中详述了日军疯狂暴行的细节，而且分析了在军国主义文化背景下成长起来的日本士兵对人类生命的漠视。张纯如对南京大屠杀的幸存者进行了大量采访，并首次发掘了许多重要文献。全书先是从日本士兵、军官为什么完全脱离了人类基本的行为规范，日本学校和教科书从心理层面向学生灌输对中国人民的仇恨和蔑视，以及高度军事化的教育体制等多个方面阐述了南京大屠杀发生的根源性原因",
                },
                {
                    id: 5,
                    name: "我们生活在巨大的差距里",
                    author: "余华",
                    cover: "5.jpg",
                    briefIntroduction:
                        "这个是余华自2003年以来的首部杂文集。十年来他走遍世界，以亦庄亦谐的笔锋将观察到的社会、时事、文化等现象一一记录剖析，在日常生活的表象下洞见社会固有病灶，对我们生活的时代进行了由外而内深刻反省，在与世界的踫撞交锋中，呈现出一个崛起、变迁中的中国。正如余华所说：“这就是我的写作，从中国人的日常生活出发，经过政治、历史、经济、社会、体育、文化、情感、欲望、隐私等等，然后再回到中国人的日常生活之中。”",
                },
            ],
        };
    },
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
            this.$router.push("/book");
        },
    },
};
</script>

<style scoped>
ul {
    display: flex;
    height: 300px;
    margin-top: 10px;
    flex: 1;
}

li {
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
    margin: 0 auto;
}

.auth {
    font-size: 12px;
    color: #999;
    font-weight: 400;
}

img {
    display: flex;
    width: 150px;
    height: 190px;
    margin: 10px auto;
}
</style>