<template>
    <div class="profile">
        <header class="profile-header">
            <logged-in-nav
                :user ="currentUser"
                @logoutUser="logoutUser"
            />
        </header>
        <div class="profile-body">
            <edit-profile
                v-if="currentUser.status === null"
                @postUser="postUser"
                :user="currentUser"
            /> 
            <profile-home
                v-if="currentUser.status !== null"
                :user="currentUser"
                :news="news"
                :weather="weather"
            /> 
        </div>
    </div>
</template>

<script>
import LoggedInNav from '@/components/LoggedInNav'
import EditProfile from '@/components/EditProfile'
import ProfileHome from '@/components/ProfileHome'

export default {
    name: 'profile',
    components: {
        LoggedInNav,
        EditProfile,
        ProfileHome
    },
    mounted() {
        this.$store.dispatch("fetchUser")
        this.$store.dispatch("fetchNews")
        this.$store.dispatch("fetchWeather")
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser
        },
        news(){
            return this.$store.state.news
        },
        weather(){
            return this.$store.state.weather
        },
    },
    methods:{
        postUser(currentUser){
            this.$store.dispatch('postUser', currentUser)
        },
        logoutUser(){
            this.$store.dispatch('logoutUser')
        }
    }
}
</script>

<style scoped>



.profile-body{
    display: flex;
    justify-content: center
}

</style>
