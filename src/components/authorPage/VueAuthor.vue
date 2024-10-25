<template>
    <div>
        <h2>{{ author.name }}</h2>
        <p>{{ author.briefIntroduction }}</p>
    </div>
</template>

<script>
export default {
    name: "VueAuthor",
    computed: {
        author() {
            return this.$store.state.author;
        },
    },
};
</script>

<style scoped>
div {
    margin: 50px 80px;
    padding-top: 30px;
}
</style>