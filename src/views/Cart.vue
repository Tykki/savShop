<template>
  <main class="cart container">
    <h4 class="text-center pt-4">Shopping Bag</h4>
    <hr class="w-25 mx-auto title-line" />
    <div class="row g-5">
      <selections-list class="col-md-7 col-lg-8" :items="items" />

      <order-summary class="col-md-5 col-lg-4" :items="items" />
    </div>
  </main>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import SelectionsList from '@/components/SelectionsList'
import OrderSummary from '@/components/OrderSummary'

export default {
  name: "Shopping-Bag",
  components: {
    SelectionsList,
    OrderSummary
  },
  setup() {
    const store = useStore();
    const qty = 3;
    return {
      items: computed(() => store.state.cart.items),
      qty,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>