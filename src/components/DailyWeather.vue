<template>
    <div class="daily-weather">
        <div :key='daily.id' v-for="daily in weather" class="weather-card">
            <!-- <h4>Time: {{daily.time}} </h4> -->
            <h3 class="weather-summary"> {{daily.summary}}</h3>
            <h3 class="weather-summary"> Sunrise: {{formatTime(daily.sunriseTime)}}</h3>
            <h3 class="weather-summary"> Sunset: {{formatTime(daily.sunsetTime)}}</h3>
            <img v-if="daily.icon === 'clear-day'"
                src="../images/clear-sun.png"
                alt="sun-icon"
                class="weather-icon"
            />
            <img class="weather-icon" v-if="daily.icon === 'clear-night'"
                src="../images/clear-fullmoon.png"
                alt="fullmoon"
            />
            <img class="weather-icon" v-if="daily.icon === 'rain'"
                src="../images/rain.png"
                alt="rain"
            />
            <img class="weather-icon" v-if="daily.icon === 'snow'"
                src="../images/snow.png"
                alt="snow"
            />
            <img class="weather-icon" v-if="daily.icon === 'sleet'"
                src="../images/sleet.png"
                alt="sleet"
            />
            <img class="weather-icon" v-if="daily.icon === 'wind'"
                src="../images/wind.png"
                alt="wind"
            />
            <img class="weather-icon" v-if="daily.icon === 'tornado'"
                src="../images/wind.png"
                alt="wind"
            />
            <img class="weather-icon" v-if="daily.icon === 'fog'"
                src="fog.png"
                alt="fog"
            />
            <img class="weather-icon" v-if="daily.icon === 'cloudy'"
                src="../images/cloudy.png"
                alt="cloudy"
            />
            <img class="weather-icon" v-if="daily.icon === 'hail'"
                src="../images/sleet.png"
                alt="hail"
            />
            <img class="weather-icon" v-if="daily.icon === 'partly-cloudy-day'"
                src="../images/day-partly-cloudy.png"
                alt="partly-cloudy-day"
            />
            <img class="weather-icon" v-if="daily.icon === 'partly-cloudy-night'"
                src="../images/night-partly-cloudy.png"
                alt="partly-cloudy-night"
            />
            <img class="weather-icon" v-if="daily.icon === 'thunderstorm'"
                src="../images/thunder-rain.png"
                alt="thunderstorm"
            />
            <h4 class="weather-summary">High: {{calculateTemperature(daily.temperatureMax)}} </h4>
            <h4 class="weather-summary"> Low: {{calculateTemperature(daily.temperatureMin)}} </h4>
        </div>
    </div>
</template>

<script>
const moment = require('moment');

export default {
    props:{
        weather: Array
    },
    methods:{
        calculateTemperature(celciusTemp){
            const farenheightTemp = ((celciusTemp * 1.8) + 32)
            return Math.round(farenheightTemp)
        },
        formatTime(time){
        return moment.unix(time).format('h:mm A')
        }
    }
}
</script>

<style>
.daily-weather{
    height: 30rem;
    overflow: scroll;
    margin-bottom: 3rem;
}
</style>