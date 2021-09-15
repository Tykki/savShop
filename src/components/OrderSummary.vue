<template>
  <section >
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Order Summary</span>
        </h4>
        <ul class="list-group list-group-flush mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Subtotal</h6>
              <small class="text-muted">Tax</small> 
              <br />
              <small class="text-muted">Shipping</small>
            </div>
            <div>
              <span class="">{{ $filters.currency(subtotal) }}</span>
              <br />
              <span class="text-muted">{{$filters.currency(tax)}}</span>
              <br />
              <span class="text-muted">{{$filters.currency(shipping)}}</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Estimated Total</h6>
            </div>
            <span class="">{{ $filters.currency(total) }}</span>
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
import { computed } from "vue";

export default {
  name: "Order-Summary",
  props: ['items'],
  setup(props) {
    const shipping = 6.99
    const subtotal = computed (()=> {
      let sum = 0;
      for (let key of props.items) {
        sum = sum + key.price
        }
      return sum
    })

    const tax = computed (() => {
     return subtotal.value * .11 
    })

    const total = computed (() => {
      return (subtotal.value + tax.value + shipping)
    })
    console.log(total)
    return {subtotal, tax, shipping, total};
  },
};
</script>

<style lang="scss" scoped></style>