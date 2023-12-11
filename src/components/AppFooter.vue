<template>
  <footer class="footer">
    <nav class="navbar">
      <div class="wrapper">
        <router-link to="/favorites" class="favorites-link">
          <p class="favorites-block">Избранное</p>
        </router-link>
        <p class="tel">8 800 3467 7324</p>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.footer {
  margin-top: auto;
}
.navbar {
  font-size: 18px;
  background-color: #0a1e32;
}
.favorites-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: white;
}
.tel {
  display: flex;
  align-items: center;
  color: white;
  font-size: 24px;
}
</style>
