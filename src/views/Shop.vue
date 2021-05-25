<template>
  <main class="shop container">
    <h4 class="text-center pt-4">The Savage Shop - Full Collection</h4>
    <hr class="w-25 mx-auto title-line" />
    <div class="row row-cols-1 row-cols-lg-2 justify-content-between">
      <section class="col col-lg-3">
        <h5>Filters</h5>
        <div class="card bg-light border-0 text-dark shadow mb-4" v-for="item, index in filters" :key="index">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted text-capitalize">{{index}}</h6>
            <div class="form-check" v-for="filter, a in filters[index]" :key="a">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                :id="'filter-'+index+a"
              />
              <label class="form-check-label text-capitalize" :for="'filter-'+index+a">
                {{filter}}
              </label>
            </div>
          </div>
        </div>
      </section>

      <section class="col col-lg-9 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        <div class="col" v-for="(item, index) in 6" :key="index">
          <div class="card bg-light border-0 text-dark shadow">
            <img src="@/assets/logo.svg" class="" alt="card.alt" />

            <div class="card-img-overlay">
              <h3
                class="card-title position-absolute bottom-0 start-50 translate-middle text-center"
              >
                Yolo
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      filters: computed(() => store.state.shop.filters),
    };
  },
};
</script>

<style lang="scss" scoped>

</style>