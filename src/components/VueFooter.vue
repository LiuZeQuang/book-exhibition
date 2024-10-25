<template>
    <div class="mod_copyright">
        <div class="links">
            <a href="#">关于我们</a> | <a href="#">联系我们</a> |
            <a href="#">联系客服</a> | <a href="#">商家入驻</a> |
            <a href="#">营销中心</a> | <a href="#">手机果物购</a> |
            <a href="#">友情链接</a> | <a href="#">销售联盟</a> |
            <a href="#">果物购社区</a> | <a href="#">果物购公益</a> |
            <a href="#">English Site</a> |
            <a href="#">Contact U</a>
        </div>
        <div class="copyright">
            地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096
            电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn <br />
            京ICP备08001421号京公网安备110108007702
        </div>
    </div>
</template>

<script>
export default {
    name: "VueFooter",
};
</script>

<style scoped>
.mod_copyright {
    text-align: center;
    background-color: #ccc;
}

.links {
    padding-top: 15px;
    margin-bottom: 15px;
    font-size: 11px;
}

.links a {
    color: #666;
    margin: 0 10px;
}

.copyright {
    font-size: 11px;
    color: #666;
    line-height: 20px;
    padding-bottom: 20px;
}
</style>