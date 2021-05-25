<template>
  <li
    class="list-group-item row d-flex mb-3 shadow"
    v-for="(item, index) in items"
    :key="index"
  >
    <div class="col-5 col-lg-4">
      <img class="cart-img" :src="item.img" :alt="item.alt" />
    </div>
    <div class="col-4 col=lg-5 text-center mt-sm-4">
      <h6>{{ item.name }}</h6>
      <small class="d-block text-capitalize">Size: {{ item.size }}</small>
      <small class="d-block text-capitalize">Color: {{ item.color }}</small>
      <small class="d-block text-capitalize">Type: {{ item.type }}</small>
    </div>
    <div class="col-3 text-end position-absolute top-50 end-0 translate-middle-y">
      <span class="me-4">${{ item.price }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "Selections-List-Item",
  setup() {
    return {};
  },
  props: ["items"],
};
</script>

<style lang="scss" scoped>
.cart-img {
  max-width: 200px;
}
</style>
