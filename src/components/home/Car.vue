<template>
  <v-card :loading="loading" class="py-1" @click="viewCar(car.id)">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="200" :src="car.thumbnail"></v-img>
    <div class="p-2">
      <div class="text-left text-subtitle-1">
        {{ car.name }}<span class="grey--text ms-2">({{ car.year }})</span>
      </div>

      <v-card-title class="p-0">${{ car.price.toLocaleString() }}</v-card-title>

      <div class="text-left">
        <v-rating
          :value="car.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="16"
        ></v-rating>
        <div class="text-left text-secondary small">Model: {{ car.model }}</div>
      </div>
    </div>
    <v-card-actions>
      <v-btn color="black text-white" depressed @click="viewCar(car.id)">
        View Car
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