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
        <h1 class="topic-title">
            Topic: {{topic.title}}
            <i 
                v-if="user.id === topic.user_id" 
                class="fa fa-pencil"
                v-on:click="toggleEditTopic"
            ></i>
        </h1>
        <p class="topic-description">
            Description: {{topic.description}}
        <add-comment
            :topic="topic"
            :topicId="topic.id"
            :user="user"
            @postComment="postComment"
        />
        <edit-topic
            v-if="editTopic"
            :topic="topic"
            :user="user"
            @toggleEditTopic="toggleEditTopic"
        />
        </p>
        <div class="comment-wrapper" v-if="topic.comments && topic.comments.length > 0">
            <div :key="comment.id"  v-for="comment in topic.comments" class="comments">
                <p class="comment-response">
                   {{user.display_name}}: {{comment.response}}
                    <add-response
                        :comment="comment"
                        :topicId="topic.id"
                        :commentId="comment.id"
                        :user="user"
                        @postComment="postComment"
                    />
                     
                </p>
                <div class="comment-wrapper" v-if="comment.comments && comment.comments.length > 0">
                    <div :key="response.id"  v-for="response in comment.comments" class="comments">
                        <p class="comment-response-two">
                            User: {{response.response}}
                            <add-response
                                :comment="response"
                                :topicId="topic.id"
                                :commentId="response.id"
                                :user="user"
                                @postComment="postComment"
                            />
                        </p>
                        <div class="comment-wrapper" v-if="response.comments && response.comments.length > 0">
                            <div :key="responses.id"  v-for="responses in response.comments" class="comments">
                                <p class="comment-response-three">
                                    THIRD: {{responses.response}}
                                    <add-response
                                        :comment="responses"
                                        :topicId="topic.id"
                                        :commentId="response.id"
                                        :user="user"
                                        @postComment="postComment"
                                    />
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
import AddComment from '@/components/AddCommentToTopic'
import AddResponse from '@/components/AddResponseToComment'
import EditTopic from '@/components/EditTopic'

export default {
    data(){
        return {
            isHidden: false,
            editTopic: false
        }
    },
    props:{
        topics: Array,
        user: Object
    },
    components:{
        AddTopic,
        AddComment,
        AddResponse,
        EditTopic
    },
    methods: {
        postTopic(topic){
            this.$emit('postTopic', topic)
        },
        postComment(comment){
            this.$emit('postComment', comment)
        },
        toggleEditTopic(){
            this.editTopic !== true
            ? this.editTopic = true
            : this.editTopic = false
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
    margin-bottom: 5rem;
    min-height: 15rem;
    max-height: auto;
    box-shadow:  0px 2px 2px hsl(0,0%, 65%);
    align-items: left;
    padding-bottom: 1rem;
    border: 0.1px solid hsl(0,0%, 70%);

}

.topic-title{
    font-family: 'Raleway', sans-serif;
    text-align: center;
    font-size: 18pt;
    padding-top: 1rem;
}
.topic-description{
    text-align: left;
    margin-left: 1rem;
}

.comment-response, .comment-response-two, .comment-response-three{
    text-align: left;
    width: 80%;
    margin-left: 1rem;
    margin-top: 1rem;
    min-height: 5rem;
    padding-left: 1rem;
    padding-top: 1rem;
    box-shadow: inset 0 0 5px hsl(0,0%, 65%);
    
}
.comment-response-two{
    margin-left: 5rem;
}

.comment-response-three{
    margin-left: 9rem;
}


.form-button{
    font-family: 'Raleway', sans-serif;
    width: auto;
    font-size: 12pt;
    margin-bottom: 2rem;
}


</style>