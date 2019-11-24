<template>
  <div class="philosophy">
    <h1 class="title">Our Philosophy</h1>
    <philosophy-content />
    <router-view/>
  </div>
</template>

<script>
import PhilosophyContent from '@/components/PhilosophyContent'


export default {
  name: 'philosophy',
   components: {
    PhilosophyContent
  }
}

</script>

<style>
.philosophy{
  display: flex;
  flex-flow: column;
  align-items: center;
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