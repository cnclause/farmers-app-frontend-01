<template>
    <div class="profile-home">
        <div class="weather-side">
            <!-- <h1> {{user.display_name}} </h1> -->
            <h1> Weather Hurr </h1>
            <weather-container 
                :weather="weather"
            />
        </div>
        <div class="profile-media" >
            <h1>Cannabis Headlines</h1>
            <news-container 
                :news="news"
            />
        </div>
    </div>
</template>

<script>
import NewsContainer from '@/components/NewsContainer.vue'
import WeatherContainer from '@/components/WeatherContainer.vue'

export default {
    components:{
        NewsContainer,
        WeatherContainer
    },
    props: {
        user: Object,
        news: Array,
        weather: Object
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre&display=swap');

    .profile-home{
        display: flex;
        flex-flow: wrap;
        width: 100%;
    }

    .weather-side{
        /* width: 20rem; */
        /* try and use calc? for height */
        width: 20%;
        height: 45rem;
        /* border: 1px solid black; */
        margin: 1rem;
        font-family: 'Raleway', sans-serif;
        padding-top: 3rem;

    }

    .weather-side h1{
        font-family: 'Frank Ruhl Libre', serif;
        font-size: 20pt;
        text-align: center;
        letter-spacing: 0.1em;
    }


    .profile-side h1{
        font-family: 'Frank Ruhl Libre', serif;
        font-size: 20pt;
        text-align: left;
        letter-spacing: 0.1em;
        padding-top: 3rem;
    }

    .profile-media{
        /* width: 75rem; */
        width: 75%;
        /* height: 45rem; */
        height: auto;
        /* border: 1px solid black; */
        margin: 1rem;
        
    }

    .profile-media h1{
        font-family: 'Frank Ruhl Libre', serif;
        font-size: 30pt;
        letter-spacing: 0.1em;
        text-align: center;
        padding: 3rem;

    }



</style>