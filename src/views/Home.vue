<template>
  <section>
    <Hero />
    <Filters />
    <Cars />
  </section>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/home/Hero.vue';
import Cars from '@/components/home/Cars.vue';
import Filters from '../components/home/Filters.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    Cars,
    Filters,
  },
};
</script>
