<template>
<div class="forum-container">
    <div :key='topic.id' v-for="topic in topics" class="forum-card">
        <h1 class="topic-title">Topic: {{topic.title}}</h1>
        <p class="topic-description">Description: {{topic.description}}</p>
        <div class="comment-wrapper" v-if="topic.comments.length > 0">
            <div :key="comment.id"  v-for="comment in topic.comments" class="comments">
                <p class="comment-response">User: {{comment.response}}</p>
                <div class="comment-wrapper" v-if="comment.comments.length > 0">
                    <div :key="response.id"  v-for="response in comment.comments" class="comments">
                        <p class="comment-response-two">User: {{response.response}}</p>
                        <div class="comment-wrapper" v-if="response.comments.length > 0">
                            <div :key="responses.id"  v-for="responses in response.comments" class="comments">
                                <p class="comment-response-three">User: {{responses.response}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    props:{
        topics: Array
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre&display=swap');

.forum-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.forum-card{
    display: flex;
    flex-direction: column;
    width: 70%;
    /* border: 1pt solid black; */
    margin: 2rem;
    min-height: 15rem;
    max-height: auto;
    box-shadow:  0 2px 2px hsl(0,0%, 80%);
    align-items: left;

}

.topic-title{
    font-family: 'Raleway', sans-serif;
    text-align: center;
    font-size: 18pt;
}
.topic-description{
    text-align: left;
    margin-left: 1rem;
}

.comment-response, .comment-response-two, .comment-response-three{
    text-align: left;
    box-shadow:  0 2px 2px hsl(0,0%, 80%);
    width: 80%;
    margin-left: 1rem;
    margin-top: 1rem;
    min-height: 5rem;
}
.comment-response-two{
    margin-left: 3rem;
}

.comment-response-three{
    margin-left: 5rem;
}


</style>