<template>
<div class="forum-container">
    <button class="form-button" v-on:click="isHidden = true" v-if="isHidden === false"> Add Topic </button>
    <button class="form-button" v-on:click="isHidden = false" v-if="isHidden === true"> X </button>
    <add-topic
        v-if="isHidden === true"
        :user="user"
        :topics ="topics"
        @postTopic="postTopic"
        :isHidden="isHidden"
    />
    <div :key='topic.id' v-for="topic in topics" class="forum-card">
        <h1 class="topic-title">Topic: {{topic.title}}</h1>
        <p class="topic-description">
            Description: {{topic.description}}
            <i v-if="user.id === topic.user_id" class="fa fa-pencil"></i>
        </p>
        <add-comment
            :topicId="topic.id"
        />
        <div class="comment-wrapper" v-if="topic.comments && topic.comments.length > 0">
            <div :key="comment.id"  v-for="comment in topic.comments" class="comments">
                <p class="comment-response">
                    User: {{comment.response}}
                    <i v-if="user.id === topic.user_id" class="fa fa-pencil"></i>
                </p>
                <div class="comment-wrapper" v-if="comment.comments && comment.comments.length > 0">
                    <div :key="response.id"  v-for="response in comment.comments" class="comments">
                        <p class="comment-response-two">
                            User: {{response.response}}
                            <i v-if="user.id === topic.user_id" class="fa fa-pencil"></i>
                        </p>
                        <div class="comment-wrapper" v-if="response.comments && response.comments.length > 0">
                            <div :key="responses.id"  v-for="responses in response.comments" class="comments">
                                <p class="comment-response-three">
                                    User: {{responses.response}}
                                    <i v-if="user.id === topic.user_id" class="fa fa-pencil"></i>
                                </p>
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
import AddTopic from '@/components/AddTopic'
import AddComment from '@/components/AddComment'
export default {
    data(){
        return {
            isHidden: false
        }
    },
    props:{
        topics: Array,
        user: Object
    },
    components:{
        AddTopic,
        AddComment
    },
    methods: {
        postTopic(topic){
            this.$emit('postTopic', topic)
        }
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
    padding-bottom: 1rem;

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

i{
    margin-left: 0.5rem;
    color: #8FB339;
}

.form-button{
    font-family: 'Raleway', sans-serif;
    width: auto;
    font-size: 12pt;
    margin-bottom: 2rem;
}


</style>