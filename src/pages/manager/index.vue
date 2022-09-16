<template>
  <div>
    <div class="container">
      <h1 class="text-center" style="margin-top: 25px">Mapa Cidade do Rock</h1>
      <div
        :style="{ height: `${clientHeight}px` }"
        class="img-container"
        ref="teste"
      >
        <div
          :style="{ top: item.y, left: item.x }"
          class="img-item"
          v-for="(item, i) in imageItens"
          :key="i"
        >
          {{ i + 1 }}
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 50px">
      <h1 class="text-center">Atrações dos Palcos #ROCKINRIO</h1>
      <div
        class="item-container"
        v-for="attraction in attractions"
        :key="attraction.id"
      >
        <h2>{{ attraction.id }} - {{ attraction.title }}</h2>
        <p>{{ attraction.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { attractions } from "./attractions.js";

export default {
  data() {
    return {
      attractions: attractions,
      clientWidth: 0,
    };
  },
  computed: {
    clientHeight() {
      return this.clientWidth / 1.8;
    },
    imageItens() {
      return [
        {
          x: `${this.clientWidth * 0.4}px`,
          y: `${this.clientHeight * 0.15}px`,
        },
        {
          x: `${this.clientWidth * 0.63}px`,
          y: `${this.clientHeight * 0.15}px`,
        },
        {
          x: `${this.clientWidth * 0.85}px`,
          y: `${this.clientHeight * 0.45}px`,
        },
        {
          x: `${this.clientWidth * 0.13}px`,
          y: `${this.clientHeight * 0.4}px`,
        },
      ];
    },
  },
  methods: {
    handleResize(event) {
      if (this.$refs.teste) {
        this.clientWidth = this.$refs.teste.clientWidth;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
p,
h1,
h2,
h3,
span {
  font-family: "Kanit", sans-serif;
  color: #fff;
}

.item-container {
  padding: 15px;
  margin-top: 15px;
  border-radius: 5px;
  border: 1px solid #bab8b8;
  background-color: rgba(121, 212, 200, 0.2);
  cursor: pointer;
}

.item-container:hover {
  background: rgb(106, 0, 0);
  font-weight: 900;
}

.img-container {
  background-image: url("https://cdn.rockinrio.com/wp-content/uploads/2022/mapa/cidade-do-rock2.jpg");
  border-radius: 5px;
  width: 96%;
  max-width: 720px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover, contain;
  margin: 0 auto;
}

.img-item {
  width: 30px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  height: 30px;
  position: relative;
  top: 30px;
  left: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
</style>
