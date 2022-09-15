<template>
  <div>
    <div class="container">
      <h1 class="text-center" style="margin-top: 25px">Mapa Cidade do Rock</h1>
      <img
        style="width: 100%; height: 650px"
        class="img-fluid"
        src="https://cdn.rockinrio.com/wp-content/uploads/2022/mapa/cidade-do-rock2.jpg"
        alt=""
      />
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
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

p,
h1,
h2,
h3,
span {
  font-family: "Roboto", sans-serif;
}

.item-container {
  padding: 2px;
  margin-top: 15px;
  border: 1px solid #bab8b8;
}

.item-container:hover {
  background: #bab8b8;
}
</style>
