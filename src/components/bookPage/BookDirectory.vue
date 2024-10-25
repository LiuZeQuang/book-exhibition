<template>
    <div>
        <h4>目录</h4>
        <ul>
            <li v-for="(item, index) in book" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "BookDirectory",
    computed: {
        book() {
            return this.$store.state.chapter;
        },
    },
};
</script>

<style scoped>
div {
    width: 990px;
    margin: 10px auto;
    border: 0.1px solid lightgrey;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

ul {
    padding-left: 10px;
    padding-bottom: 20px;
}

ul li {
    margin-top: 10px;
    font-size: 15px;
}

h4 {
    margin: 20px 10px;
    color: green;
}
</style>