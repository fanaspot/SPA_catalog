<template>
  <div class="container">
    <div class="product-wrapper">
      <div class="route-link">
        <router-link to="/"> Главная</router-link>
        <span> › </span>
        <span>Избранное</span>
      </div>
      <p class="title">Избранное</p>
      <div v-if="favoritesProducts.length" class="cards">
        <product-info
          v-for="product in favoritesProducts"
          :key="product.id"
          :product="product"
          :isFavoritesPage="true"
        >
        </product-info>
      </div>
      <div v-else class="favorites-empty">
        <p>Cписок избранного пуст</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductInfo from "@/components/ProductInfo.vue";

export default {
  name: "FavoritesView",

  components: {
    ProductInfo,
  },
  computed: {
    ...mapGetters({
      favoritesProducts: "getFavoritesProducts",
    }),
  },
};
</script>
<style scoped>
.cards {
  justify-content: flex-start;
  margin: 16px 0 100px 0;
}
.favorites-empty {
  display: flex;
  width: 1400px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px 0 100px 0;
}
.favorites-empty p {
  color: #464c58;

  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
}
.title {
  display: flex;
  color: #0a1e32;

  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
}
.route-link {
  margin: 35px 0 16px 0;
  text-align: left;
}
.route-link a:hover {
  text-decoration: none;
}
.route-link a:visited {
  color: inherit;
}
</style>
