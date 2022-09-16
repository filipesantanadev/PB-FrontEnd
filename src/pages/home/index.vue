<template>
  <div class="home-page" ref="pageAll">
    <div class="buttons">
      <button 
        v-for="(day, i) in days" 
        :key="day.key" 
        @click="selected = i" 
        :style="{backgroundColor : `rgba(121, 212, 200${selected === i ? '' : ', 0.5'})`}">{{day.key}}</button>
    </div>
    {{width}}

    <div class="carousel">
      <n-carousel autoplay>
        <img
          v-for="img in days[selected].imgs"
          :key="img"
          class="carousel-img"
          :src="img"
        >
      </n-carousel>
    </div>

    <div class="data-shows" v-for="stage in days[selected].stages" :key="stage.name">
      <h1 style="color: #C3C1C5">{{ stage.name }}</h1>
      <div v-for="att in stage.att" :key="att">
        <p style="color: #C3C1C5">
          {{att}}
        </p>
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
      days: days,
      width: window.innerWidth
    };
  },
};
</script>

<style scoped>
  .carousel-img {
    margin: 0 auto;
    width: 94%;
    height: 350px;
    object-fit: cover;
  }

  .buttons{
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  button{
    color: white;
    background-color: rgba(121, 212, 200, 0.4);
    padding: 5px 12px;
    border: none;
    cursor: pointer;
    font-family: 'Kanit', sans-serif
  }

  .carousel{
    margin-top: 25px;
    max-width: 720px;
    widows: 98%;
  }

  .home-page{
    margin: 2% auto;
  }

  .data-shows{
    margin-top: 25px;
    text-align: center;
  }
  
  .data-shows h1{
    font-weight: bold;
    font-size: 75px;
    margin-bottom: 12px;
    font-family: 'Kanit', sans-serif;
    border-bottom: 1px solid #C3C1C5;
    padding: 10px;
  }

  .data-shows p{
    font-weight: bold;
    font-size: 26px;
    font-family: 'Kanit', sans-serif
  }
</style>