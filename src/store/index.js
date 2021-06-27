import Vue from "vue";
import Vuex from "vuex";
import cars from "../constants/cars";
import router from "../router/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cars: cars,
    availableCars: cars, //this variable will be affected by filters
    selectedCarId: null,
    selectedCar: null,
  },
  getters: {
    getCars: (state) => state.cars,
    getAvailableCars: (state) => state.availableCars,
    getCarYears: (state) => [...new Set(state.cars.map((item) => item.year))], //get all unique years available
    getCarModels: (state) => [...new Set(state.cars.map((item) => item.model))], //get all unique models available
    getSelectedCar: (state) => state.selectedCar,
  },
  mutations: {
    selectCar(state, payload) {
      this.selectedCarId = payload;
      router.push({ path: `/car/${payload}` });
    },
    getSelectedCar(state, payload) {
      state.selectedCar = cars.find((item) => item.id == payload);
    },
    filterByName(state, payload) {
      if (payload != "") {
        //compare all search term in lower case to avoid case sensitivity
        let filteredResults = cars.filter(({ name }) =>
          name.toLocaleLowerCase().includes(payload.toLocaleLowerCase())
        );
        // if(filteredResults.length > 0){
            state.availableCars = filteredResults;
        // }
      } else {
        state.cars = cars;
      }
    },
    filterByYear(state, payload) {
      if (payload != "") {
        //display only cars that's made in the year selected
        let filteredResults = cars.filter(({ year }) => year == payload);
        state.availableCars = filteredResults;
      } else {
        state.cars = cars;
      }
    },
    filterByModel(state, payload) {
      if (payload != "") {
        //display only the cars that's has the model selected
        let filteredResults = cars.filter(({ model }) => model == payload);
        state.availableCars = filteredResults;
      } else {
        state.cars = cars;
      }
    },
  },
});

export default store;
