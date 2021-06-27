<template>
  <section>
    <Hero />
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Hero from '@/components/home/Hero.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Hero,
  },
};
</script>
