<template>
  <div class="container">
    <div v-if="product" class="product-wrapper">
      <div class="route-link">
        <router-link to="/"> Главная</router-link>
        <span> › </span>
        <span>{{ product.title }}</span>
      </div>
      <div class="product-full-info">
        <div class="product-image">
          <img :src="product.image" :alt="product.title" />
        </div>
        <div class="product-info">
          <p class="product-title">
            {{ product.title }}
          </p>
          <p class="product-desc">
            {{ product.description }}
          </p>
          <p class="product-price">{{ product.price }} $</p>
          <button-favorites :isFullInfoPage="true" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonFavorites from "@/components/ButtonFavorites.vue";
import { mapGetters } from "vuex";
export default {
  components: { ButtonFavorites },
  name: "CardProductView",
  data() {
    return {
      id: +this.$route.params.id,
    };
  },

  computed: {
    ...mapGetters({
      products: "getProducts",
      getProductById: "getProductById",
    }),
    product() {
      return this.getProductById(this.id);
    },
  },
};
</script>

<style scoped>
.product-full-info {
  display: flex;
  margin-top: 10px;
  margin-bottom: 100px;
  gap: 40px;
}
.product-image img {
  width: 680px;
  max-width: none;
  border: 1px solid #e5e5e5;
}

@media (max-width: 1024px) {
  .product-full-info {
    flex-wrap: wrap;
  }
  .product-image img {
    max-width: 100%;
  }
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}
.product-info p {
  text-align: left;
}

.product-info .product-title {
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
}
.product-desc {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.product-price {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
}
.route-link {
  margin: 35px 0 35px 0;
  text-align: left;
}
.route-link a:hover {
  text-decoration: none;
}
.route-link a:visited {
  color: inherit;
}
</style>
