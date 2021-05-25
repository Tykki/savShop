<template>
  <main class="about container">
    <div class="row py-4">
      <div class="col-12">
        <div class="card bg-dark text-light shadow">
            <img src="@/assets/logo.svg" class="img-about" alt="card.alt" />

            <div class="card-img-overlay">
              <h3
                class="card-title position-absolute top-50 start-50 translate-middle text-center border border-secondary border-5 p-3"
              >
                "Bite Me" -- Tykki
              </h3>
            </div>
            <div class="card-img-overlay bg-overlay"></div>

          </div>
      </div>
    </div>
    <div class="row g-5 py-5">
    <div class="col-md-4 d-flex" v-for="item, index in aboutInfo" :key="index">
      <div class="my-auto text-primary me-3"
          :class="{'text-secondary': (index===1)}">
        <icon :icon="item.icon" class="about-icon" />
      </div>
      <div class="my-auto">
        <h2>{{item.title}}</h2>
        <p>{{item.detail}}</p>
      </div>
    </div>
  </div>
  
  </main>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default ({
  setup() {
    const store = useStore();

    return {
      aboutInfo: computed(() => store.state.about.aboutInfo),
    };
  },
})
</script>

<style lang="scss" scoped>
.bg-overlay{
  opacity: .4;
  background-color: #552583;
  background-image: var(--bs-gradient);
}
.img-about{
  opacity: .2;
}
.about-icon{
  width: 2em !important;
  height: 2em;
}
</style>