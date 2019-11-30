<template>
    <nav class='navbar'>
        <router-link class = "navlink" to="/" exact>
            <img src='../images/hempLogo.png' alt="logo"/> 
        </router-link> 
        <router-link class = "navlink" :to="{ name: 'philosophy' }" exact>Our Philosophy</router-link> 
        <router-link class = "navlink" :to="{name: 'research'}" exact>Educational Resources</router-link> 
        <router-link class = "navlink" :to="{name: 'login-token'}">Sign In</router-link> 
        <!-- <a class= 'navlink' href=''>Our Philosphy</a>
        <a class= 'navlink' href=''>Educational Resources</a>
        <a class= 'navlink' href=''>Sign In</a> -->
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400&display=swap');

.navbar{
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    align-content: center;
}

.navlink{
font-family: 'Raleway', sans-serif;
text-decoration: none;
color: #8FB339;
font-size: 16pt;
align-self: center;
}

img {
    height: 2rem;
    width: auto;
}



</style>