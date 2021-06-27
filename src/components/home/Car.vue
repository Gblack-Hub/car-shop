<template>
  <v-card :loading="loading" class="my-1" @click="viewCar(car.id)">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="car.thumbnail"></v-img>

    <div class="pt-2 text-subtitle-1">{{ car.name }}</div>
    <v-card-title class="p-1">${{ car.price }}</v-card-title>
    <div class="grey--text ms-4">({{ car.year }})</div>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="car.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">{{ car.rating }}</div>
      </v-row>

      <div class="my-4 text-subtitle-1">{{ car.model }}</div>

      <!-- <div>
        I wanted to put car description here
      </div> -->
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" @click="viewCar(car.id)">
        View
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    car: Object,
  },
  data: () => ({
    loading: false, //activate the loading progress bar on the card clicked
  }),

  methods: {
    viewCar(id) {
      this.loading = true;
      this.$store.commit('selectCar', id);
    },
  },
};
</script>

<style>
</style>