<template>
    <div class="add-response">
        <i 
            v-if="user.id === comment.user_id" 
            class="fa fa-pencil"
            v-on:click="editPost = true"
        >
        </i>
        <edit-post
            v-if="editPost"
            :comment="comment"
            :editPost="editPost"
            @toggleEditPost="toggleEditPost"
        /> 
        <form class ="add-comment-form" v-on:submit.prevent="addResponse($event)">
            <textarea
                class="textarea-comment"
                name="response"
                rows="1"
                placeholder="Comment"
                required
            />
            <input type="submit" value="Comment"/>
        </form>
    </div>
</template>

<script>
import EditPost from '@/components/EditPost'
export default {
    data(){
        return{
            editPost: false
        }
    },
    props:{
        topicId: Number,
        comment: Object,
        user: Object,
        commentId: Number
    },
    components:{
        EditPost
    },
    methods: {
        addResponse(event){
            event.preventDefault()
            const formData = new FormData(event.target)
            this.$emit("postComment",{
                response: formData.get('response'),
                parent_id: this.commentId,
                topic_id: this.topicId,
                user_id: this.user.id
            })

            event.target.reset()
        },
        toggleEditPost(){
            this.editPost !== true
            ? this.editPost = true
            : this.editPost = false
        }
    }
}
</script>

<style>
.fa-pencil{
    color: #8FB339;
    align-self: center;
    margin-right: 1rem;
}

</style>