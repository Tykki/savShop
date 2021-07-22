<template>
  <main class="home">
    <Slide />

    <div class="container">
      <h4 class="text-center">Featured Content</h4>

      <hr class="w-25 mx-auto title-line">

      <section class="row mb-4">
        <article
          class="col-6"
          v-for="(card, index) in collections"
          :key="index"
        >
          <div class="card bg-light text-dark card-collection shadow">
            <img :src="card.img" class="card-img" :alt="card.alt" />

            <div class="card-img-overlay">
              <router-link to="/shop" class="text-decoration-none">
              <h3
                class="card-title position-absolute top-50 start-50 translate-middle text-center border border-primary border-5 p-3"
              >
                {{ card.name }}
              </h3>
              </router-link>
            </div>

          </div>
          
        </article>
      </section>
      <section class="d-grid mx-auto">
        <router-link to="/shop" class="btn btn-lg btn-outline-secondary mx-auto">
          Shop All Collections
        </router-link>
      </section>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import { computed } from "vue";
import { useStore } from "vuex";
import Slide from "@/components/FeatureSlide";

export default {
  name: "Home",
  components: {
    Slide,
  },
  setup() {
    const store = useStore();

    return {
      collections: computed(() => store.state.home.landingCollections),
    };
  },
};
</script>

<style lang="scss" scoped>

.card-img {
  opacity: 0.6;
}

.card-collection {
  min-height: 400px;
  border: none;
}
</style>