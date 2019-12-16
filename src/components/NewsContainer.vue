<template>
    <div class="news-container">
        <div :key='article.id' v-for="article in news" class="news-card">
            <div id="title-container">
                <h2 class="news-title">{{article.title}}</h2>
                <h2 class="news-source">{{article.source.name}}</h2>
            </div>
            <img :src="article.urlToImage" class="news-img"/>
            <a :href="article.url" class="news-link"> View Full Article</a>
            <!-- <p>{{article.description}}</p> -->

        </div>
    </div>
</template>

<script>

export default {
    props:{
        news: Array
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre&display=swap');

.news-container{
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
}
.news-card{
    font-family: 'Raleway', sans-serif;
    display: flex;
    flex-direction: column;
    /* flex-flow: wrap; */
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    width: 30%;
    height: auto;
    /* border: 1px solid black; */
    box-shadow: 9px 9px 5px #aaaaaa;
    border-radius: 0.1rem;
}
#title-container{
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
}

.news-title{
    font-size: 20pt;
    text-align: center;
    font-family: 'Frank Ruhl Libre', serif;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
}

.news-source{
    font-style: italic;
}


.news-img{
    width: 14rem;
    height: 10rem;
}

.news-card p{
    font-size: 12pt;
}

.news-link{
    text-decoration: none;
    color: #0e5521;
    margin: 0.4rem;
}

.news-link:hover{
    color:#8FB339;
    
}
</style>
