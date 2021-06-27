<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-5 font-weight-bold py-3">Explore Cars</h1>
        <!-- <v-divider></v-divider> -->
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12" sm="4" md="6" lg="6" xl="6">
        <h1 class="py-3">Filters</h1>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="6" xl="6">
        <v-row>
          <v-col>
            <v-select
              :items="getCarModels"
              v-model="searchedCarModel"
              @change="filterByModel"
              label="Model"
              outlined
            ></v-select>
            <v-select
              :items="getCarYears"
              v-model="searchedCarYear"
              @change="filterByYear"
              label="Year"
              outlined
            ></v-select>
            <v-text-field
              label="Outlined"
              v-model="searchedCarName"
              @input="filterByName"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
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
    },
    getCarYears() {
      return this.$store.getters.getCarYears;
    },
    getCarModels() {
      return this.$store.getters.getCarModels;
    },
  },
  data() {
    return {
      searchedCarName: '',
      searchedCarModel: '',
      searchedCarYear: '',
    };
  },
  methods: {
    filterByName() {
      this.$store.commit('filterByName', this.searchedCarName);
    },
    filterByModel() {
      this.$store.commit('filterByModel', this.searchedCarModel);
    },
    filterByYear() {
      this.$store.commit('filterByYear', this.searchedCarYear);
    },
  },
};
</script>

<style>
</style>