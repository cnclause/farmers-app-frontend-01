<template>
    <div class="profile">
        <header class="profile-home">
            <logged-in-nav></logged-in-nav>
        </header>
        <edit-profile
            v-if="currentUser.status === null"
            :user="currentUser"
        /> 
        <profile-home
            v-if="currentUser.status != null"
        /> 
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
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser
        }
    }
}
</script>
