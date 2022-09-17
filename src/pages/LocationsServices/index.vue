<template>
    <div class="services-container">
        <h1> Serviços proximos </h1>
        <div id="map"></div>

        <div>
            <h1 style="color: rgb(121, 212, 200)">ROCK IN RIO</h1>
            <h1 style="color: red">HOSPITAIS</h1>
            <h1 style="color: yellow">delegacia</h1>
        </div>
    </div>
</template>

<script>
import { addToMap } from './locations'

export default {
    name: 'PBFrontEndIndex',

    data() {
        return {
            
        };
    },

    mounted() {
        var map = L.map('map').setView([-22.977, -43.395], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);
        
        addToMap(map)
    },

    methods: {
        
    },
};
</script>

<style scoped>
    #map{
        margin: 25px auto;
        width: 98%;
        max-width: 920px;
        height: 500px;
        border-radius: 15px;
    }

    h1{
        font-weight: bold;
        margin-bottom: 12px;
        font-family: 'Kanit', sans-serif;
        border-bottom: 1px solid #C3C1C5;
        padding: 10px;
        color: #C3C1C5
    }

    .services-container{
        display: flex;
        flex-direction: column;
        align-items: center
    }
</style>