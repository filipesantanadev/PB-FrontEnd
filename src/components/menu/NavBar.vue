<template>
  <nav class="menu">
    <div class="logo">
      <img src="../../assets/Rock.jpg" />
    </div>

    <ItemMenu
      class="menu-item"
      v-for="item in routes"
      :item="item"
      :key="item.name"
    />
  </nav>
</template>

<script>
import ItemMenu from "./itemMenu";

export default {
  components: { ItemMenu },

  data() {
    return {
      width: window.innerWidth,
      routes: [
        {
          name: "home",
          icon: "fa-solid fa-music",
          title: "Atrações",
        },
        {
          name: "info",
          icon: "fa-solid fa-circle-info",
          title: "Informações",
        },
        {
          name: "services",
          icon: "fa-solid fa-hand-holding-medical",
          title: "Serviços",
        },
      ],
    };
  },

  mounted() {
    window.onresize = () => {
      this.width = window.innerWidth
    }
  }
};
</script>

<style scoped>
.logo {
  display: flex;
  border-bottom: 2px solid #e30613;
}

.logo img {
  margin-top: 2px;
  width: 40%;
  margin: 0 auto;
  min-width: 60px;
}

.menu {
  background-color: #000000;
}

.menu-item {
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding-bottom: 6px;
  border-bottom: 2px solid #000000;
}

.menu-item:hover {
  border-bottom: 2px solid #e30613;
}
</style>
