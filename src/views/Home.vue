<template>
  <section>
    <Hero />
    <Cars />
  </section>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/home/Hero.vue';
import Cars from '@/components/home/Cars.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    Cars,
  },
};
</script>
