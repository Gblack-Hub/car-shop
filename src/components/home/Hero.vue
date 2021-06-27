<template>
  <section class="hero">
      <h1>Cars</h1>
    <!-- <v-img
      :src="require('../assets/logo.svg')"
      class="my-3"
      contain
      height="200"
    /> -->
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  height: 90vh;
  background: url('../../assets/hero.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
h1 {
    font-size: 10rem;
    color: #fff;
    padding-top: 20%;
    padding-left: 2rem;
    /* margin: ; */
}
</style>