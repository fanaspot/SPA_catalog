<template>
  <div v-if="isFullInfoPage">
    <div
      v-if="isFavoritesProduct(product.id)"
      @click="deleteFavorites(product.id)"
      class="btn-favorites-big"
      role="button"
    >
      <div class="favorites-text">
        <img src="@/assets/img/heart-fill.svg" alt="" />
        <p>ИЗБРАННОЕ</p>
      </div>
    </div>
    <div
      v-else
      @click="addFavorites(product)"
      class="btn-favorites-big"
      role="button"
    >
      <div class="favorites-text">
        <img src="@/assets/img/heart-light.svg" alt="" />
        <p>ИЗБРАННОЕ</p>
      </div>
    </div>
  </div>
  <div v-else>
    <div
      role="button"
      class="btn-favorites-small"
      v-if="isFavoritesProduct(product.id)"
      @click="deleteFavorites(product.id)"
    >
      <img v-if="isFavoritesPage" src="@/assets/img/x-mark.svg" alt="" />
      <img v-else src="@/assets/img/heart-fill.svg" alt="" />
    </div>
    <div
      v-else
      @click="addFavorites(product)"
      class="btn-favorites-small"
      role="button"
    >
      <img src="@/assets/img/heart.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ButtonFavorites",
  props: {
    isFullInfoPage: {
      type: Boolean,
    },
    isFavoritesPage: {
      type: Boolean,
    },
    product: {
      type: Object,
    },
  },

  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      isFavoritesProduct: "isFavoritesProduct",
    }),
    ...mapMutations(["setFavoritesProduct", "removeFavoritesProduct"]),
  },

  methods: {
    addFavorites(product) {
      this.$store.commit("setFavoritesProduct", product);
    },
    deleteFavorites(id) {
      this.$store.commit("removeFavoritesProduct", id);
    },
  },
};
</script>

<style scoped>
.btn-favorites-small {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.btn-favorites-small img {
  width: 25px;
}
.btn-favorites-big {
  border: 1px solid #000;
  border-radius: 4px;
  padding: 8px 34px 8px 34px;
  width: 200px;
  cursor: pointer;
}
.btn-favorites-big:active {
  background-color: #e5e5e5;
}
.favorites-text {
  display: flex;
  justify-content: space-between;
}
.favorites-text p {
  color: #0a1e32;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;
}
</style>
