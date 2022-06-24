<template>
  <section>
    <h1 class="display-3 text-center mt-3">
      {{ heading }}
    </h1>
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :width="'45%'"
        :product="product"
        hasverlay
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createNamespacedHelpers } from 'vuex';

import ProductCard from '@/components/ProductCard.vue';

const { mapState, mapActions } = createNamespacedHelpers('products');

export default defineComponent({
  name: 'HomePage',
  components: {
    ProductCard,
  },
  data() {
    return {
      heading: 'Shop',
    };
  },
  computed: mapState(['products']),
  created(): void {
    this.fetchProducts();
  },
  methods: mapActions(['fetchProducts']),
});
</script>
