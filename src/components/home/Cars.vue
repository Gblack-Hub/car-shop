<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-5 font-weight-bold pt-3">Explore Cars</h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <template v-if="cars.length > 0">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          v-for="(car, index) in cars"
          :key="index"
        >
          <Car :car="car" />
        </v-col>
      </template>
      <template class="my-5 text-center subtitle-5">
        <v-alert type="warning">Car not found</v-alert>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import Car from '@/components/home/Car.vue';

export default {
  name: 'Cars',
  components: {
    Car,
  },
  computed: {
    cars() {
      return this.$store.getters.getAvailableCars;
    }
  },
};
</script>

<style>
</style>