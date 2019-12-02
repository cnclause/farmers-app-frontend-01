<template>
    <nav class='navbar'>
        <router-link class = "navlink" :to="{name: 'profile'}">
            <img src='../images/hempLogo.png' alt="logo"/> 
        </router-link> 
        <router-link class = "navlink" :to="{ name: 'philosophy' }" exact>Our Philosophy</router-link> 
        <router-link class = "navlink" :to="{name: 'research'}" exact>Educational Resources</router-link> 
        <router-link class = "navlink" :to="{name: 'forum'}">Forum</router-link> 
        <router-link class = "navlink" :to="{name: 'profile'}">Profile</router-link> 
        <!-- <a class= 'navlink' href=''>Our Philosphy</a>
        <a class= 'navlink' href=''>Educational Resources</a>
        <a class= 'navlink' href=''>Sign In</a> -->
    </nav>
</template>

<style>
.router-link-exact-active {
      border-top: 2px solid currentColor;
    }
</style>

