<template>
    <h1>Loggin in...</h1>
</template>

<script>

export default {
    mounted(){
        const { token } = this.$route.query
        if(token) {
            this.$store.dispatch('login', token)
            this.$router.push('/profile')
        } else {
            // this.$router.push('/')
            this.$router.push('/profile')
        }
    }
    
}
</script>