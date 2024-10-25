<template>
    <div>
        <h3>{{ this.$store.state.book.name }}</h3>
        <span></span>
    </div>
</template>

<script>
export default {
    name: "BookHeader",
};
</script>

<style scoped>
div {
    display: flex;
    align-items: center;
    padding: 20px 20px 10px 50px;
}

span {
    flex-grow: 1;
    border: 0.1px solid lightgrey;
    margin-left: 15px;
}
</style>