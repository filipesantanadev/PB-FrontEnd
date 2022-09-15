<template>
  <div class="main-container">
    <button v-for="(day, i) in days" :key="day.key" @click="selected = i">{{day.key}}</button>

    <div style="width: 300px">
      <n-carousel autoplay>
        <img
          v-for="img in days[selected].imgs"
          :key="img"
          class="carousel-img"
          :src="img"
        >
      </n-carousel>
    </div>

    <div v-for="stage in days[selected].stages" :key="stage.name">
      {{stage.name}}
      <div v-for="att in stage.att" :key="att">
        {{att}}
      </div>
    </div>
  </div>
</template>

<script>
import { days } from './attractions.js'

export default {
  data() {
    return {
      selected: 0,
      days: days
    };
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