<template>
  <section>
        <h4 class="d-flex mb-3">
          <span class="text-primary">Your Selections</span>
          <span class="text-primary ms-1">({{ items.length }})</span>
        </h4>
        <ul class="list-group list-group-flush">
          <list-item :items="items" />
        </ul>
      </section>
</template>

<script>

import ListItem from '@/components/SelectionsListItem'

export default {
  name: "Selections-List",
  props: ['items'],
  components: {
    ListItem,
    },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>