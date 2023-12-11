import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FavoritesView from "../views/FavoritesView.vue";
import CardProductView from "../views/CardProductView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  },
  {
    path: "/card-product/:id",
    name: "cardProduct",
    component: CardProductView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
