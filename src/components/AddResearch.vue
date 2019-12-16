<template>
    <div class="add-research">
        <!-- <button id="toggle-article-form"
            v-on:click="toggleAddArticle"
        > Add Article
            </button> -->
        <form
            v-on:submit.prevent="addArticle"
        >
            <label> Article Title: </label>
                 <input
                    type="text"
                    name="title"
                    placeholder="Article Title"
                    required 
                />
            <label> Article Blurb: </label>
                <input
                    type="text"
                    name="blurb"
                    placeholder="Article Blurb"
                    required 
                />
            <label> Image URL: </label>
                <input
                    type="text"
                    name="image_url"
                    placeholder="Image URL"
                    required 
                />
            <label> Article Link: </label>
                <input
                    type="text"
                    name="link_to_article"
                    placeholder="Article Link"
                    required 
                />
                <input type="submit" value="Add Article"/>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isHidden: false
        }
    },
    methods: {
        addArticle(event){
            event.preventDefault()
            const formData = new FormData(event.target)
            this.$emit('postArticle', {

                title: formData.get('title'),
                blurb: formData.get('blurb'),
                image_url: formData.get('image_url'),
                link_to_article: formData.get('link_to_article')
            })

            event.target.reset()
        },
        //  toggleAddArticle(){
        //     this.isHidden = !this.isHidden
        // }
    }
}
</script>

<style>

#toggle-article-form{
    width: 15rem;
}

</style>