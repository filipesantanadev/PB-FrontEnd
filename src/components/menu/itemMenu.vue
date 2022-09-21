<template>
    <div :class="`menu-item ${active ? 'active' : ''}` ">
        <font-awesome-icon class="icon" :icon="item.icon" :style="{ color, fontSize: '22px' }" />
        <router-link :to="path" :style="{color}">{{ item.title }}</router-link>
    </div>
</template>

<script>
export default {
    props: ['item'],

    computed: {
        color(){
            return this.item.name === this.$route.name ? '#79D4C8' : '#C3C1C5'
        },
        
        path(){
            return this.item.name === 'home' ? '/' : `/${this.item.name}`
        },

        active(){
            return this.item.name === this.$route.name
        }
    },
};
</script>

<style scoped>
    a{
        font-weight: bold;
        text-decoration: none;
        font-size: 26px;
        font-family: 'Kanit', sans-serif;
    }

    .menu-item{
        border-bottom: 2px solid transparent;
    }
    
    .menu-item:hover{
        border-bottom: 2px solid #79D4C8;
    }

    .menu .icon{
        width: 30px;
    }

    .active {
        border-bottom: 2px solid #79D4C8;
    }
</style>