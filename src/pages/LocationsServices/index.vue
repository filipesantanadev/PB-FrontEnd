<template>
    <div class="services-container">
        <h1 style="text-align: center"> Mapa da cidade </h1>
        <div class="map-container">
            <div id="map"></div> 
        </div>

        <div class="where-cnt">
            <h1>Aonde voce esta?</h1>

            <div class="input-cnt">
                <input type="text" v-model="address"/>
                <button @click="address && getAddress()" >Procurar</button>
            </div>

            <div style="padding: 10px" v-if="userLoc !== null"> 
                <p v-if="userLoc" style="color: #45d388">Verifique sua localização no mapa acima</p>
                <p v-else style="color: #F35A4F">Endereço informado inválido</p>
            </div>
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
import axios from 'axios'

export default {
    name: 'PBFrontEndIndex',

    data() {
        return {
            map: '',
            userLoc: null,
            address: '',
            locations: locations
        };
    },

    methods: {
        async getAddress(){
            const text = this.address.replace(' ', '+')
            const { data } = await axios.get(`http://api.positionstack.com/v1/forward?access_key=6c843ec092ac455d59f6f31a21ecff14&query=${text}`)

            if(data.data[0]) {
                this.map.remove()
                this.initializeMap([data.data[0].latitude , data.data[0].longitude])
                L.marker([data.data[0].latitude , data.data[0].longitude]).addTo(this.map).bindPopup('Voce esta aqui');
                L.polyline([[-22.977, -43.395], [data.data[0].latitude , data.data[0].longitude]], {
                    color: 'red'
                }).addTo(this.map);
                this.userLoc = true
            } else this.userLoc = false
            this.address = '';
        },

        initializeMap(loc){
            this.map = L.map('map').setView(loc, 12.5);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap'
            }).addTo(this.map);
            addToMap(this.map)
        }
    },

    mounted() {
        this.initializeMap([-22.984051758338863, -43.3630563495497])
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

    .where-cnt{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        max-width: 720px;
        padding: 20px;
        border-bottom: 1px solid #C3C1C5;
        margin-bottom: 20px;
    }
    
    .loc-container h1, .where-cnt h1{
        border: none;
        font-size: 36px;
        margin-bottom: 12px;
        max-width: 280px;
        padding: 15px 30px 15px 30px;
    }

    .where-cnt h1{
        max-width: 100%;
    }

    .where-cnt input{
        height: 40px;
        width: 100%;
        border: none;
        line-height: 40px;
        border-radius: 5px;
        font-size: 22px;
    }
    
    .where-cnt button{
        height: 40px;
        border: 0.2px solid white;
        color: white;
        background-color: #343A40;
        font-size: 18px;
        line-height: 18px;
        font-weight: bold;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
    }

    .input-cnt{
        display: flex;
        gap: 8px;
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