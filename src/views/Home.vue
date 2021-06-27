<template>
  <section>
    <Hero />
    <Cars />
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Hero from '@/components/home/Hero.vue';
import Cars from '@/components/home/Cars.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Hero,
    Cars,
  },
};
</script>
