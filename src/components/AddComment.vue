<template>
    <div class="add-comment-container">
        <form class ="add-comment-form" v-on:submit.prevent="addComment($event)">
            <textarea
                name="response"
                rows="2"
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
        topic: Object,
        user: Object
    },
    methods: {
        addComment(event){
            event.preventDefault()
            const formData = new FormData(event.target)
            this.$emit("postComment",{
                response: formData.get('response'),
                topic_id: this.topicId,
                user_id: this.user.id
            })

            event.target.reset()
        }
    }
}
</script>

<style>
.add-response{
    display: flex;
}
.add-comment-form{
    display: flex;
    flex-flow: row;
    justify-content: center;
}

.add-comment-form textarea{
    height: 2rem;
}

.add-comment-form input{
    width: 6rem;
    height: 2rem;
}

/* i{
    color: #8FB339;
    align-self: center;
    margin-right: 1rem;
} */
</style>