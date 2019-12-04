<template>
    <div class="add-post">
    <form v-if="!newTopic" v-on:submit.prevent="addTopic($event)">
        <label> Topic: </label>
        <input
            type="text"
            name="title"
            placeholder="Topic Title"
            required 
        />
        <label> Description: </label>
        <textarea
            name="description"
            rows="5"
            placeholder="Topic Description"
            required
        />
        <input type="submit" value="Post Topic"/>
    </form>
    <div v-if="newTopic" class="forum-card">
        <h1 class="topic-title">Topic: {{newTopic.title}}</h1>
        <p class="topic-description">
            Description: {{newTopic.description}}
        </p>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newTopic: null
        }
    },
    props:{
        user: Object,
        topics: Array,
        isHidden: Boolean
    },
    // mounted(){
    //          console.log(this.topics)
    //          return this.topics
    // },
    methods: {
        updateNewTopic(user){
            this.newTopic = user
        },
        addTopic(event){
            event.preventDefault()

            const formData = new FormData(event.target)
            const title = formData.get('title')
            const description= formData.get('description')
            const user_id = this.user.id

            // const topic ={
            //     title, description, user_id
            // }

            fetch('http://localhost:3000/topics', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({ title, description, user_id })
            }).then(response =>console.log('response',response))
            // .then(this.updateNewTopic)

            // event.target.reset()
        }
    }
}
</script>

<style>
.add-post{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;

}
form{
    font-family: 'Raleway', sans-serif;
}

textarea{
    font-size: 12pt;
    margin-top: 0.5rem;
    width: 30rem;
    text-align: center;
}

input{
    margin: 1rem;
    height: 3rem;
    width: 15rem;
    text-align: center;
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

</style>