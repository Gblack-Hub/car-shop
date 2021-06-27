<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="5" lg="4" xl="4">
        <template v-if="selectedCar.thumbnail">
          <img
            :src="selectedCar.thumbnail"
            alt=""
            class="img-fluid img-thumbnail"
          />
        </template>
      </v-col>
      <v-col cols="12" sm="6" md="7" lg="8" xl="8">
        <v-btn @click="previousPage" depressed>Go Back</v-btn>
        <div>
          <div class="fw-bold">Name:</div>
          <div class="mb-3">{{ selectedCar.name }}</div>
          <div class="fw-bold">Price:</div>
          <div class="fw-bold mb-3 lead">${{ selectedCar.price }}</div>
          <div class="fw-bold">Description:</div>
          <div class="mb-3">{{ selectedCar.description }}</div>
          <div class="mb-3">
            <div class="fw-bold">Ratings:</div>
            <v-rating
              :value="selectedCar.rating"
              color="amber"
              dense
              half-increments
              readonly
              size="17"
            ></v-rating>

            <!-- <span class="grey--text ms-4"
              >({{ selectedCar.rating.toFixed() }})</span
            > -->
          </div>
          <div class="fw-bold">Model:</div>
          <div class="mb-3">{{ selectedCar.model }}</div>
          <div class="fw-bold">Model:</div>
          <div>{{ selectedCar.year }}</div>
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
    previousPage() {
      this.$router.go(-1); //the go(-1) function allows user to go backward once on click of the button.
    },
  },
};
</script>

<style>
</style>