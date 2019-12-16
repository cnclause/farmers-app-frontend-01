<template>
    <div class="educational-content">
         <div :key='article.id' v-for='article in articles' class='article-card'>
        <h1 class="article-title"> {{article.title}} </h1>
        <div class="article-details">
            <img class="research-image" :src="article.image_url" />
            <p class="research-blurb"> {{article.blurb}}
            <a class="article-link" :href="article.link_to_article">Link to Article</a> 
            </p>
        </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props:{
        articles: Array
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre&display=swap');

.educational-content{
    margin: 5rem;
}

.article-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
}

.article-details{
    display:flex;
    width: 90%;
    margin-top: 2rem;
}

.article-title{
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 20pt;
}

.research-image{
    width: 30rem;
    height: 20rem;
    border-radius: 4px;
}

.research-blurb{
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    padding-top: 3rem;
    padding-left: 2rem;
}

.article-link{
    text-decoration: none;
    color:#8FB339;
}
</style>

