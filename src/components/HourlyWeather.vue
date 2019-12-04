<template>
    <div class="hourly-weather">
        <div :key='hourly.id' v-for="hourly in weather" class="weather-card">
            <h4>Time: {{hourly.time}} </h4>
            <h3> {{hourly.summary}}</h3>
            <img v-if="hourly.icon === 'clear-day'"
                src="../images/clear-sun.png"
                alt="sun-icon"
            />
            <img class="weather-icon" v-if="hourly.icon === 'clear-night'"
                src="../images/clear-fullmoon.png"
                alt="fullmoon"
            />
            <img class="weather-icon" v-if="hourly.icon === 'rain'"
                src="../images/rain.png"
                alt="rain"
            />
            <img class="weather-icon" v-if="hourly.icon === 'snow'"
                src="../images/snow.png"
                alt="snow"
            />
            <img class="weather-icon" v-if="hourly.icon === 'sleet'"
                src="../images/sleet.png"
                alt="sleet"
            />
            <img class="weather-icon" v-if="hourly.icon === 'wind'"
                src="../images/wind.png"
                alt="wind"
            />
            <img class="weather-icon" v-if="hourly.icon === 'tornado'"
                src="../images/wind.png"
                alt="wind"
            />
            <img class="weather-icon" v-if="hourly.icon === 'fog'"
                src="fog.png"
                alt="fog"
            />
            <img class="weather-icon" v-if="hourly.icon === 'cloudy'"
                src="../images/cloudy.png"
                alt="cloudy"
            />
            <img class="weather-icon" v-if="hourly.icon === 'hail'"
                src="../images/sleet.png"
                alt="hail"
            />
            <img class="weather-icon" v-if="hourly.icon === 'partly-cloudy-day'"
                src="../images/day-partly-cloudy.png"
                alt="partly-cloudy-day"
            />
            <img class="weather-icon" v-if="hourly.icon === 'partly-cloudy-night'"
                src="../images/night-partly-cloudy.png"
                alt="partly-cloudy-night"
            />
            <img class="weather-icon" v-if="hourly.icon === 'thunderstorm'"
                src="../images/thunder-rain.png"
                alt="thunderstorm"
            />
            <h4>Temperature: {{ calculateTemperature(hourly.temperature) }} </h4>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        weather: Array
    },
    methods:{
        calculateTemperature(celciusTemp){
            return((celciusTemp * 1.8) + 32)
        }
    }
}
</script>

<style>
.hourly-weather{
    height: 30rem;
    overflow: scroll;
    margin-bottom: 3rem;
}
.weather-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
}
</style>