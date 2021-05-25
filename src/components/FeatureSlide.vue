<template>
  <div id="featureSlide" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#featureSlide"
        data-bs-slide-to="0"
        class="active bg-secondary"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#featureSlide"
        data-bs-slide-to="1"
        class="bg-secondary"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#featureSlide"
        data-bs-slide-to="2"
        class="bg-secondary"
        aria-label="Slide 3"
      ></button>
    </div>
    
      <feature-item  />
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#featureSlide"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#featureSlide"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
// import {computed} from 'vue'
// import { useStore } from 'vuex'
import FeatureItem from './FeatureItem'

export default {
  name: "feature-slide",
  components: { FeatureItem },
  setup() {
  //  const store = useStore()

    return {
        //  featured: computed(() => store.state.featuredItems),
         };
  },
  props: {},
};
</script>

<style lang="scss" scoped>

</style>