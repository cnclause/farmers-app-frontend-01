<template>
    <div class="research-pg">
        <home-nav
        v-if="!currentUser"
        />
        <logged-in-nav
        v-if="currentUser"
        />
        <div class="add-articles"
            v-if="currentUser &&currentUser.role_id === 1">
            <add-research
                @postArticle="postArticle"
            />
        </div>
        <div class="research">
            <h1 class="title">Educational Resources</h1>
            <educational-content
                :articles="articles"
            />
        </div>   
  </div>
</template>

<script>
import HomeNav from '@/components/HomeNav'
import LoggedInNav from '@/components/LoggedInNav'
import EducationalContent from '@/components/EducationalContent'
import AddResearch from '@/components/AddResearch'

export default {
    name: 'research',
    components: {
        HomeNav,
        LoggedInNav,
        EducationalContent,
        AddResearch
    },
    mounted(){
        this.$store.dispatch('fetchArticles')
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser
        },
        articles(){
            return this.$store.state.articles
        }
    },
    methods:{
        postArticle(article){
            this.$store.dispatch('postArticle', article)
        }
    }
}
</script>