<template>
    <div>
        <ul ref="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <li><img src="@/assets/swiper/lb1.png" alt=""></li>
            <li><img src="@/assets/swiper/lb2.png" alt=""></li>
            <li><img src="@/assets/swiper/lb3.png" alt=""></li>
            <li><img src="@/assets/swiper/lb4.png" alt=""></li>
            <li><img src="@/assets/swiper/lb1.png" alt=""></li>
        </ul>
        <ol>
            <li :class="{'current' : number == 1 }"></li>
            <li :class="{'current' : number == 2 }"></li>
            <li :class="{'current' : number == 3 }"></li>
            <li :class="{'current' : number == 4 }"></li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'VueBanner',
    data(){
        return{
            currentIndex: 0,
            number: 1,
            intervalId: null
        }
    },
    mounted() {
        this.intervalId = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % 5;
            this.number = this.currentIndex + 1
            setTimeout(() => {
                if (this.currentIndex == 4) {
                    this.$refs.carousel.style.transition = 'transform 0s';
                    this.currentIndex = 0;
                    this.number = 1
                    setTimeout(() => {
                        this.$refs.carousel.style.transition = 'transform 0.5s';
                    }, 10)
                }
            }, 500)
        }, 2000);
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    }
}
</script>

<style scoped>
div{
    display: flex;
    position: relative;
    width: 100%;
    height: 390px;
    margin: 0 auto;
    overflow: hidden;
}

ul{
    display: flex;
    width: 100%;
    transition: transform 0.5s;
}

ul li{
    flex: 0 0 100%;
}

ul img{
    width: 100%;
    height: 550px;
    margin-top: -1px;
}

ol {
    position: absolute;
    bottom: 10px;
    left: 50px;
    list-style-type: none;
    padding-left: 50%;
    margin-left: -90px;
}

ol li {
    float: left;
    width: 8px;
    height: 8px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    margin: 0 3px;
    border-radius: 50%;
    cursor: pointer;
}

.current {
    background-color: #fff;
}

</style>