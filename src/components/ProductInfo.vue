<template>
  <div class="card">
    <router-link
      :to="{ name: 'cardProduct', params: { id: product.id } }"
      class="card-info"
    >
      <div class="product">
        <img :src="product.image" alt="product.title" />
      </div>
      <div class="product-info">
        <p class="product-title">
          {{ product.title }}
        </p>
        <p class="price">{{ product.price }} $</p>
      </div>
    </router-link>
    <button-favorites :product="product" :isFavoritesPage="isFavoritesPage" />
  </div>
</template>

<script>
import ButtonFavorites from "./ButtonFavorites.vue";
export default {
  name: "ProductInfo",
  props: {
    product: {
      type: Object,
    },
    isFavoritesPage: {
      type: Boolean,
    },
  },
  components: {
    ButtonFavorites,
  },

  methods: {},
};
</script>

<style scoped>
.card {
  position: relative;
  width: 320px;
  height: 418px;
  text-decoration: none;
  text-align: center;
  padding: 5px;
  transition: box-shadow 200ms;
}
.card:hover {
  box-shadow: -5px 5px 20px #e5e5e5;
}
.card-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
}

.card-info:active {
  text-decoration: none;
}
.price {
  color: #464c58;

  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
.product img {
  height: 336px;
  object-fit: contain;
}

.product-info {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: space-around;
}

.product-title {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  color: #0a1e32;
}
</style>
