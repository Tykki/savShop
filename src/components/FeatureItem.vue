<template>
<div class="carousel-inner">
  <div
    v-for="(item, index) in featured"
    :key="index"
    class="carousel-item"
    :class="{ active: index === 0 }"
  >
    <img
      :src="item.src"
      class="d-block w-25 mx-auto feature-img img-fluid"
      :alt="item.alt"
    />
  </div>
</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Featured-Item",
  props: [],
  setup() {
    const store = useStore();
    return {
      featured: computed(() => store.state.home.featuredItems),
    };
  },
};
</script>

<style lang="scss" scoped>
.feature-img {
  min-width: 200px;
}
</style>