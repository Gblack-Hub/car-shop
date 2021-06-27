<template>
  <section class="bg-light">
    <v-container>
      <v-row align-items="center" class="my-2">
        <v-col cols="12" sm="4" md="4" lg="4" xl="4">
          <h3 class="subtitle-5">Filters</h3>
        </v-col>
        <v-col cols="12" sm="8" md="8" lg="8" xl="8" class="mb-1">
          <v-row>
            <v-col cols="12" sm="4" md="4" lg="4" xl="4" class="mb-1">
              <v-select
                dense
                :items="getCarModels"
                v-model="searchedCarModel"
                @change="filterByModel"
                label="Model"
                outlined
              ></v-select>
            </v-col>
            <v-col class="mb-1">
              <v-select
                dense
                :items="getCarYears"
                v-model="searchedCarYear"
                @change="filterByYear"
                label="Year"
                outlined
              ></v-select>
            </v-col>
            <v-col class="mb-1">
              <v-text-field
                dense
                label="Search by Name"
                v-model="searchedCarName"
                @input="filterByName"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  computed: {
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