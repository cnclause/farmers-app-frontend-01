<template>
    <div class="research-pg">
        <home-nav
        v-if="!currentUser"
        />
        <logged-in-nav
        v-if="currentUser"
        />
        <div class="research">
            <h1 class="title">Educational Resources</h1>
            <educational-content />
        </div>
  </div>
</template>

<script>
import HomeNav from '@/components/HomeNav'
import LoggedInNav from '@/components/LoggedInNav'
import EducationalContent from '@/components/EducationalContent'

export default {
    name: 'research',
    components: {
        HomeNav,
        LoggedInNav,
        EducationalContent
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser
        },
    }
}
</script>