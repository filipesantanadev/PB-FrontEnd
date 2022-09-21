<template>
  <div class="home-page" ref="pageAll">
    <div :class="`${width > 720 ? 'buttons' : 'buttons-mob'}`">
      <button 
        v-for="(day, i) in days" 
        :key="day.key" 
        @click="selected = i" 
        :style="{backgroundColor : `rgba(121, 212, 200${selected === i ? '' : ', 0.5'})`}">{{day.key}}</button>
    </div>

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

    <div style="padding: 2%" class="data-shows" v-for="stage in days[selected].stages" :key="stage.name">
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
import { days } from './days.js'

export default {
  data() {
    return {
      selected: 0,
      days: days,
      width: window.innerWidth
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
  .carousel-img {
    margin: 0 auto;
    width: 94%;
    height: 450px;
    object-fit: cover;
  }

  .buttons{
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .buttons-mob{
    display: grid;
    gap: 4px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 8px;
  }

  .buttons-mob button:last-child{
    grid-column: 1 / 4;
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
    margin: 15px auto;
    margin-bottom: 0;
    max-width: 920px;
    width: 94%;
  }

  .home-page{
    margin: 2% auto;
  }

  .data-shows{
    margin: 0 auto;
    text-align: center;
  }
  
  .data-shows h1{
    font-weight: bold;
    font-size: 75px;
    font-family: 'Kanit', sans-serif;
    border-bottom: 1px solid #C3C1C5;
    padding-bottom: 10px;
    max-width: 920px;
    margin: 15px auto;
  }

  .data-shows p{
    font-weight: bold;
    font-size: 26px;
    font-family: 'Kanit', sans-serif
  }
</style>