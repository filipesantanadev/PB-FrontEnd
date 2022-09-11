<template>
    <div class="menu-item">
        <font-awesome-icon class="icon" :icon="item.icon" :style="{ color, fontSize: '22px' }" />
        <router-link :to="path" :style="{color}">{{ item.title }}</router-link>
    </div>
</template>

<script>
export default {
    props: ['item'],

    computed: {
        color(){
            return this.item.name === this.$route.name ? '#E30613' : 'white'
        },
        
        path(){
            return this.item.name === 'home' ? '/' : `/${this.item.name}`
        }
    },
};
</script>

<style scoped>
    a{
        font-weight: bold;
        text-decoration: none;
        font-size: 26px;
        margin-left: 4px;
    }

    .menu {
    background-color: #000000;
    }

    .menu .icon{
        width: 30px;
        margin-left: 16px;
    }
</style>