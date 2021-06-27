import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CarDetail from "../views/CarDetail.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/car/:id",
    name: "CarDetail",
    component: CarDetail,
  },
  {
    path: "*",
    name: "PageNotFound",
    component: NotFound,
  },
];

//the function below enables user go go back to their previous position when they click on the back button
const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return { selector: to.hash };
  } else if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior,
});

export default router;
