<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="4" xl="4">
        <img :src="selectedCar.thumbnail" alt="" class="img-fluid" />
      </v-col>
      <v-col cols="12" sm="6" md="8" lg="8" xl="8">
        <div>
          <div>Name: {{ selectedCar.name }}</div>
          <div>Description: {{ selectedCar.description }}</div>
          <div>
            <v-rating
              :value="selectedCar.rating"
              color="amber"
              dense
              half-increments
              readonly
              size="17"
            ></v-rating>

            <span class="grey--text ms-4">({{ selectedCar.rating }})</span>
          </div>
          <div>Model: {{ selectedCar.model }}</div>
          <div class="fw-bold">${{ selectedCar.price }}</div>
          <div>Year: {{ selectedCar.year }}</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    //get the details of the selected car when the page is mounted
    this.getSelectedCar();
  },
  computed: {
    //make the details of the selected car available in the view
    selectedCar() {
      return this.$store.getters.getSelectedCar;
    },
  },
  methods: {
    getSelectedCar() {
      let carId = this.$route.params.id;
      this.$store.commit('getSelectedCar', carId);
    },
  },
};
</script>

<style>
</style>