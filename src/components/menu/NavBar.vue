<template>
  <nav>
    <div class="menu" v-if="width > 720"> 
      <ItemMenu class="menu-item" v-for="item in routes" :item="item" :key="item.name"/>
    </div>

    <div class="menu-mobile" v-else @click="status = !status">
      <div class="menu-header-mobile">
        <h1 :style="{ color: '#C3C1C5'}"> {{page}} </h1>
        <font-awesome-icon icon="fas fa-angle-down" :style="{ color: '#C3C1C5', fontSize: '22px' }"/>
      </div>

      <transition class="menu-mobile" name="slide">
        <div v-if="status">
          <ItemMenu class="menu-item" v-for="item in routes" :item="item" :key="item.name"/>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import ItemMenu from './itemMenu'

export default {
  components: {ItemMenu},

  data() {
    return {
      status: false,
      width: window.innerWidth,
      routes: [
        {
          name: 'home',
          icon: 'fa-solid fa-music',
          title: 'Atrações'
        },
        {
          name: 'info',
          icon: 'fa-solid fa-circle-info',
          title: 'Informações'
        },
        {
          name: 'services',
          icon: 'fa-solid fa-hand-holding-medical',
          title: 'Serviços'
        }
      ],
    };
  },

  computed: {
    page(){
      const page = this.routes.find(({name}) =>  name === this.$route.name)
      if(!page) return 'Atrações'
      return page.title
    }
  },

  mounted() {
    window.onresize = () => {
      this.width = window.innerWidth
    }
  }
};
</script>

<style scoped>
  .logo{
    display: flex;
  }

  .menu-header-mobile{
    display: flex;
    padding: 10px;
    gap: 15px;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #79D4C8
  }

  .logo img{
    margin-top: 2px;
    width: 40%;
    margin: 0 auto;
    min-width: 60px;
  }

  .menu{
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 15px;
  }
  
  .menu-mobile{
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
  }

  .menu-item{
    display: flex;
    align-items: center;
    margin-top: 16px;
    justify-content: center;
    padding: 6px;
    gap: 8px;
  }

  .menu-item:hover {
    color: 2px solid #79D4C8;
  }

  .slide-item {
    position: relative;
    top: -40;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s;
  }
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-40px);
  }
  .slide-enter-to{
    opacity: 1;
    transform: translateY(10px);
  }
  </style>
