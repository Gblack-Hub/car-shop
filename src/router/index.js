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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
