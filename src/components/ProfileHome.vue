<template>
    <div class="profile-home">
        <div class="profile-side">
            <h1> {{user.display_name}} </h1>
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

export default {
    components:{
        NewsContainer
    },
    props: {
        user: Object,
        news: Array
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

    .profile-side{
        /* width: 20rem; */
        /* try and use calc? for height */
        width: 20%;
        height: 45rem;
        border: 1px solid black;
        margin: 1rem;
        font-family: 'Raleway', sans-serif;
        padding-top: 3rem;

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