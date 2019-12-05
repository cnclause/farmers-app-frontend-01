<template>
    <div class="weather-sidebar">
        <div class="current-weather">
            <h2 class="weather-title"> Current Weather </h2>
            <p class="weather-summary">{{weather.currently.summary}}</p>
            <img v-if="weather.currently.icon === 'clear-day'"
                src="../images/clear-sun.png"
                alt="sun-icon"
            />
            <img class="weather-icon" v-if="weather.currently.icon === 'clear-night'"
                src="../images/clear-fullmoon.png"
                alt="fullmoon"
            />
            <img class="weather-icon" v-if="weather.currently.icon === 'rain'"
                src="../images/rain.png"
                alt="rain"
            />
            <img class="weather-icon" v-if="weather.currently.icon === 'snow'"
                src="../images/snow.png"
                alt="snow"
            />
            <img class="weather-icon" v-if="weather.currently.icon === 'sleet'"
                src="../images/sleet.png"
                alt="sleet"
            />
            <img class="weather-icon" v-if="weather.currently.icon === 'wind'"
                src="../images/wind.png"
                alt="wind"
            />
            <img class="weather-icon" v-if="weather.currently.icon === 'tornado'"
                src="../images/wind.png"
                alt="wind"
            />
            <img class="weather-icon" v-if="weather.currently.icon === 'fog'"
                src="fog.png"
                alt="fog"
            />
            <img class="weather-icon" v-if="weather.currently.icon === 'cloudy'"
                src="../images/cloudy.png"
                alt="cloudy"
            />
            <img class="weather-icon" v-if="weather.currently.icon === 'hail'"
                src="../images/sleet.png"
                alt="hail"
            />
            <img class="weather-icon" v-if="weather.currently.icon === 'partly-cloudy-day'"
                src="../images/day-partly-cloudy.png"
                alt="partly-cloudy-day"
            />
            <img class="weather-icon" v-if="weather.currently.icon === 'partly-cloudy-night'"
                src="../images/night-partly-cloudy.png"
                alt="partly-cloudy-night"
            />
            <img class="weather-icon" v-if="weather.currently.icon === 'thunderstorm'"
                src="../images/thunder-rain.png"
                alt="thunderstorm"
            />
        </div>
        <div class="hourly-weather-container">
            <h2 class="weather-title"> Hourly </h2>
            <hourly-weather
                :weather="weather.hourly.data"
            />
        </div>
        <div class="daily-weather-container">
            <h2 class="weather-title"> Daily </h2>
            <daily-weather
                :weather="weather.daily.data"
            />
        </div>
    </div>
</template>

<script>
import HourlyWeather from '@/components/HourlyWeather'
import DailyWeather from '@/components/DailyWeather'

export default {
    components:{
        HourlyWeather,
        DailyWeather
    },
    props:{
        weather: Object
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');


.current-weather{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    font-family: 'Roboto', sans-serif;

}
.weather-summary{
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.1em;
    margin-top: 0.2em;
}

.weather-title{
    font-family: 'Raleway', sans-serif;
    text-align:center;
    padding-top: 1rem;
    font-size: 18pt;
    margin-bottom: 1rem;
    text-decoration: underline;
}

p{
    font-size: 14pt;
}

.weather-icon{
    width: 6.5rem;
    height: 6.5rem;
    margin-top: 0;
}



</style>