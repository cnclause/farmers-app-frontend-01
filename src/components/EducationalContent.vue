<template>
    <div class="educational-content">
        <h1 class="article-title"> Industrial Hemp Trial Report </h1>
        <div class="article-details">
            <img class="resaerch-image" src="@/images/hemp_research.jpg" />
            <p class="research-blurb"> "In 2017, we conducted several trials to assess the potential <br /> of Industrial Hemp and several management <br /> variables as it affected seed production."<br />
            <br />
            <a class="article-link" href="https://extension.psu.edu/industrial-hemp-trial-report?">Link to Article</a> 
            </p>
            
        </div>
    </div>
    
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre&display=swap');

.educational-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem;
}

.article-details{
    display:flex;
    flex-flow: wrap;
    width: 60%;
    margin-top: 2rem;

}

.article-title{
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 20pt;
}

.resaerch-image{
    width: 30rem;
    height: 20rem;
    border-radius: 4px;
}

.research-blurb{
    font-family: 'Roboto', sans-serif;
    padding-top: 3rem;
    padding-left: 2rem;
}

.article-link{
    text-decoration: none;
    color:#8FB339;
}
</style>

