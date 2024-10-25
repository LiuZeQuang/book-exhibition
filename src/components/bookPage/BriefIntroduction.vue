<template>
    <div>
        <h4>内容简介</h4>
        <p>
            {{ this.$store.state.book.briefIntroduction }}
        </p>
    </div>
</template>

<script>
export default {
    name: "BriefIntroduction",
};
</script>

<style scoped>
div {
    width: 990px;
    margin: 0 auto;
    border: 0.1px solid lightgrey;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    border-radius: 10px;
}
p {
    margin: 20px 10px;
    font-size: 12px;
    line-height: 1.75;
}
h4 {
    margin: 20px 10px;
    color: green;
}
</style>