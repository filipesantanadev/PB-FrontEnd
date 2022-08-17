<template>
    <div>
        <div style="width: 300px">
            <n-carousel autoplay>
                <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                >
                <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                >
                <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                >
                <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                >
                <img
                class="carousel-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCoYpX4iNaKkeOBaXaHZWQqjiGfhmWzVdpg&usqp=CAU"
                >
            </n-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PBFrontEndIndex',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    .carousel-img {
        width: 100%;
        height: 240px;
        object-fit: cover;
    }
</style>