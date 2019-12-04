<template>
    <div class="add-response">
        <form class ="add-comment-form" v-on:submit.prevent="addResponse($event)">
            <textarea
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
export default {
    props:{
        topicId: Number,
        commentId: Number,
        user: Object
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
        }
    }
}
</script>