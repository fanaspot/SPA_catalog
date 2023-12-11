<template>
  <header>
    <nav class="navbar">
      <div class="wrapper">
        <router-link to="/">
          <img src="@/assets/img/Logo.svg" alt="пекоф" />
        </router-link>
        <div class="favorites-block">
          <router-link to="/favorites">
            <img src="@/assets/img/heart-fill.svg" alt="" />
            <div class="favorites-count">
              {{ favoritesCount }}
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    favoritesCount: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.favorites-count {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 8px;
  color: white;
  top: 16px;
  right: -10px;
}
</style>
