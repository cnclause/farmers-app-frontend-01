<template>
    <div class="forum">
        <header class="forum-header">
                <logged-in-nav></logged-in-nav>
        </header>
        <div class="forum-page">
            <h1 class="forum-title"> Community Discussion </h1>
            <forum-container
                :topics="topics"
                :user="currentUser"
            />
        </div>
    </div>
</template>

<script>
import LoggedInNav from '@/components/LoggedInNav'
import ForumContainer from '@/components/ForumContainer'
export default {
    name:"forum",
    components: {
        LoggedInNav,
        ForumContainer
    },
    mounted() {
    this.$store.dispatch("fetchTopics")
    },
    computed: {
        topics() {
            return this.$store.state.topics
        },
        currentUser(){
            return this.$store.state.currentUser
        }
    }
}
</script>

<style>
    .forum-page{
        display: flex;
        flex-direction: column;
    }

    .forum-title{
        text-align: center;
        font-family: 'Frank Ruhl Libre', serif;
        letter-spacing: 0.1em;
        font-size: 40pt;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }

    


</style>