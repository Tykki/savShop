<template>
  <section >
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Order Summary</span>
        </h4>
        <ul class="list-group list-group-flush mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Subtotal</h6>
              <small class="text-muted">Shipping</small>
            </div>
            <div>
              <span class="text-muted">$12</span>
              <br />
              <span class="text-muted">$12</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Estimated Total</h6>
              <small class="text-muted"></small>
            </div>
            <span class="text-muted">$8</span>
          </li>
        </ul>

        <div class="">
          <button type="submit" class="btn btn-outline-secondary w-100">
            Checkout
          </button>
        </div>
      </section>
</template>

<script>
export default {
  name: "Selections-List-Item",
  props: ['items'],
  setup(props) {

    function cartTotal() {
      let sum = 0;
      for (let key in props.items) {
        sum = sum + props.items[key].price
      }
      return sum;
    }

    console.log(props.items)
    return {};
  },
};
</script>

<style lang="scss" scoped></style>