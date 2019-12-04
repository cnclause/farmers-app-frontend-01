<template>
    <div class="add-post">
    <form>
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
    </div>
</template>

<script>
export default {
    props:{
        user: Object,
        isHidden: Boolean
    },
    methods: {
        addTopic(event){
            const formData = new FormData(event.target)

            const title = formData.get('title')
            const description= formData.get('description')
            const user_id = this.user.id
            fetch('http://localhost:3000/topic', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({ title, description, user_id })
            }).then(result => console.log("posted topic", result))
        }
    }
}
</script>

<style>
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

</style>