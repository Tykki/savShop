<template>
  <navbar />
  <router-view />
  <footerbar />
</template>

<script>

import Navbar from './components/Navbar'
import Footerbar from './components/Footer'

export default {
  name: 'SavShop',
  components: { Navbar, Footerbar },
  setup() {

    return { }
  },
};
</script>

<style lang="scss">
$dust: #6c757d;
$primary: #552583;
$secondary: #fdb927;

$theme-colors: (
  "dust":       $dust,
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    #198754,
  "info":       #0dcaf0,
  "warning":    #ffc107,
  "danger":     #dc3545,
  "light":      #f8f9fa,
  "dark":       #212529
);

@import "node_modules/bootstrap/scss/bootstrap";

.router-link-active {
    color: $primary !important;
}

.cart-link {
  color: $secondary;
}

.title-line{
  min-width: 250px;
}

.btn-outline-secondary{
  &:hover{
    color: white;
  }
}



</style>
