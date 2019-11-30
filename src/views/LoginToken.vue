<template>
    <h1>Loggin in...</h1>
</template>

<script>

export default {
    mounted(){
        console.log("we in login", this.$route)
        const { token } = this.$route.query
        console.log('loginTokenVue', token)
        if(token) {
            this.$store.dispatch('login', token)
            this.$router.push('/profile')
        } else {
            this.$router.push('/')
        }
    }
    
}
</script>