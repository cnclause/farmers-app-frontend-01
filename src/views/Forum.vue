<template>
    <div class="forum">
        <header class="forum-header">
                <logged-in-nav></logged-in-nav>
        </header>
        <div class="forum-page">
            <h1 class="forum-title"> Community Discussion </h1>
            <forum-container></forum-container>
        </div>
    </div>
</template>

<script>
import LoggedInNav from '@/components/LoggedInNav'
import ForumContainer from '@/components/ForumContainer'
export default {
    components: {
        LoggedInNav,
        ForumContainer
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