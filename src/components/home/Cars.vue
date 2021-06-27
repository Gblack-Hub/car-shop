<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-5 font-weight-bold py-3">Explore Cars</h1>
        <!-- <v-divider></v-divider> -->
      </v-col>
    </v-row>
    <v-row class="text-center">
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
    </v-row>
  </v-container>
</template>

<script>
import Car from '@/components/home/Car.vue';
import cars from '../../constants/cars';

export default {
  name: 'Cars',
  components: {
    Car,
  },
  computed: {
    cars() {
      return cars;
    },
  },
};
</script>

<style>
</style>