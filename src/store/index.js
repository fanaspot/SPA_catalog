import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    favoritesProducts:
      JSON.parse(localStorage.getItem("favoritesProducts")) || [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getFavoritesProducts(state) {
      return state.favoritesProducts;
    },
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
    isFavoritesProduct: (state) => (id) => {
      return !!state.favoritesProducts.find((product) => product.id === id);
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setFavoritesProduct(state, favoritesProduct) {
      state.favoritesProducts = [...state.favoritesProducts, favoritesProduct];
      localStorage.setItem(
        "favoritesProducts",
        JSON.stringify(state.favoritesProducts)
      );
    },
    removeFavoritesProduct(state, id) {
      state.favoritesProducts = state.favoritesProducts.filter(
        (favoritesProduct) => favoritesProduct.id !== id
      );
      localStorage.setItem(
        "favoritesProducts",
        JSON.stringify(state.favoritesProducts)
      );
    },
  },
  actions: {
    fetchProducts(context) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          context.commit("setProducts", response.data);
        })
        .catch(() => {
          return;
        });
    },
  },
  modules: {},
});
