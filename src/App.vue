<template>
  <div id="app">
    <AppHeader :favoritesCount="favoritesProducts.length" />

    <router-view />

    <AppFooter />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: { AppFooter, AppHeader },
  computed: {
    ...mapActions(["fetchProducts"]),
    ...mapGetters({
      favoritesProducts: "getFavoritesProducts",
    }),
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>
<style>
#app {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
