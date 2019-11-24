<template>
  <div class="home">
    <div class="title-signup-container">
      <h1 class="title"> Cannect </h1>
      <a class="sign-in-link" href='#'>Login/Sign Up </a>
    </div>
    <p class="mission-statement"> Mission: connecting cannabis farmers around the world through collaboration and research</p>
   
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre&display=swap');


.home{
  display: flex;
  flex-direction: column;
  height: 35rem;
  align-content: center;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
  font-size: 20pt;
}

.title-signup-container{
  padding-top: 3rem;
  padding-bottom: 3rem;
  height: 15rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.title{
  align-self: center;
  font-family: 'Frank Ruhl Libre', serif;
  letter-spacing: 0.1em;
  font-size: 40pt;
}

.sign-in-link {
  align-self: center;
  font-size: 15pt;
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  color: #8FB339;
}

.mission-statement {
  font-family: 'Raleway', sans-serif;
  font-size: 15pt;
  align-self: center;
  color: #0e5521;
  border-top: 5rem;

}



</style>
