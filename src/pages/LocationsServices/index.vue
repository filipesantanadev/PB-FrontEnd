<template>
    <div class="services-container">
        <h1 style="text-align: center"> Mapa da cidade </h1>
        <div class="map-container">
            <div id="map"></div> 
        </div>

        <div class="loc-container" v-for="loc in locations" :key="loc.title">
            <div class="title-cnt">
                <h1 :style="{backgroundColor: loc.color}">{{ loc.title }}</h1>    
            </div>
            <div class="loc-circle" v-for="circle in loc.circle" :key="circle.name">
                <p>{{circle.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { addToMap, locations } from './locations'

export default {
    name: 'PBFrontEndIndex',

    data() {
        return {
            locations: locations
        };
    },

    mounted() {
        var map = L.map('map').setView([-22.984051758338863, -43.3630563495497], 12.5);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        addToMap(map)
    },
};
</script>

<style scoped>
    .map-container{
        width: 92%;
        margin: 0 auto;
    }

    #map{
        margin: 25px auto;
        width: 98%;
        max-width: 920px;
        height: 500px;
        border-radius: 15px;
    }
    
    h1{
        font-weight: bold;
        font-family: 'Kanit', sans-serif;
        border-bottom: 1px solid #C3C1C5;
        padding: 10px;
        color: white;
        margin: 0;
        text-align: center;
    }
    
    .loc-container h1{
        border: none;
        font-size: 36px;
        margin-bottom: 12px;
        max-width: 280px;
        padding: 15px 30px 15px 30px;
    }
    
    p{
        font-weight: bold;
        margin-bottom: 4px;
        font-family: 'Kanit', sans-serif;
        padding: 10px;
        color: white;
        font-size: 22px;
        text-align: center;
    }

    .services-container{
        display: flex;
        flex-direction: column;
        align-items: center
    }

    .loc-container{
        display: flex;
        flex-direction: column;
        width: 96%;
        max-width: 720px;
        margin: 15px auto;
        align-items: center
    }
    
    .title-cnt{
        transform: skew(20deg);
    }

    @media only screen and (max-width: 320px) {
        .loc-container h1{
            border: none;
            font-size: 26px;
            margin-bottom: 12px;
            max-width: 220px;
            padding: 15px 30px 15px 30px;
        }
    }
</style>