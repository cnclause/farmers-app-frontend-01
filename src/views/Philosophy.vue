<template>
<div class="philosophy-pg">
    <home-nav></home-nav>
      <div class="philosophy">
      <h1 class="title">Our Philosophy</h1>
      <philosophy-content />
    </div>
  </div>
</template>

<script>
import PhilosophyContent from '@/components/PhilosophyContent'
import HomeNav from '@/components/HomeNav'



export default {
  name: 'philosophy',
   components: {
    PhilosophyContent,
    HomeNav
  }
}

</script>

<style>

.philosophy {
  display: flex;
  flex-direction: column;
  height: 35rem;
  /* align-content: center; */
  align-items: center;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
  font-size: 20pt;
}
.title{
  text-align: center;
  font-family: 'Frank Ruhl Libre', serif;
  letter-spacing: 0.1em;
  font-size: 40pt;
  margin-top: 5rem;
  margin-bottom: 5rem;
}


</style>