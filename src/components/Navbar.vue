<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg mb-4">
    <div class="container-fluid">
      <div class="d-lg-none d-block">
          <router-link class="nav-link cart-link" to="/cart"><icon icon="shopping-cart" /></router-link>
        </div>
      <router-link class="navbar-brand mx-auto" to="/"
        ><img class="brand-img" alt="Savage Logo" src="../assets/logo.svg"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#SavShopNav"
        aria-controls="SavShopNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="SavShopNav">
        <ul class="navbar-nav text-center ms-lg-5 mb-2 mb-lg-0">
          <li class="nav-item me-lg-5" v-for="link in navlinks" :key="link.name">
            <router-link class="nav-link fw-bold" :to="link.route">{{ link.name }}</router-link>
          </li>
        </ul>
        <div class="input-group me-lg-2 mx-auto nav-search">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="Search"
            v-model="navQuery"
          />
          <button class="btn btn-outline-dust" type="button" id="">
            <icon icon="search" />
          </button>
        </div>
      </div>
        <div class="d-none d-lg-block">
          <router-link class="nav-link cart-link" to="/cart"><icon icon="shopping-cart" /></router-link>
        </div>
    </div>
  </nav>
</template>

<script>
import {ref, computed} from 'vue'
import { useStore } from 'vuex'

export default {
  name: "Navbar",
  setup() {
      const store = useStore()

    let navQuery = ref("")
    return {
         navlinks: computed(() => store.state.nav.navlinks),
         navQuery
         };
  },
};
</script>

<style lang="scss" scoped>
.brand-img {
  height: 125px;
}

.nav-search {
  width: 300px;
}

.cart-link {
  svg {
    height: 24px;
    width: 24px;
  }

}
</style>
