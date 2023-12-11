<template>
  <div class="home">
    <div class="front-picture"></div>
    <div class="container">
      <div class="cards">
        <product-info
          v-for="product in products"
          :key="product.id"
          :product="product"
        >
        </product-info>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from "vuex";
import ProductInfo from "@/components/ProductInfo.vue";

export default {
  name: "HomeView",

  components: {
    ProductInfo,
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
    }),
  },
};
</script>
<style scoped>
.cards {
  justify-content: space-between;
  margin: 100px 0 100px 0;
}
.front-picture {
  position: relative;
  height: 505px;
  display: flex;
  background: url("@/assets/img/bag.png") no-repeat 50% 50%;
  z-index: -1;
  min-height: 100%;
  background-size: cover;
}
</style>
