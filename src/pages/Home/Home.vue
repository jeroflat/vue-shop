<template>
  <section>
    <h1 class="display-3 text-center mt-3">Shop</h1>

    <!-- <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :width="'45%'"
        :product="product"
        hasverlay
      />
    </div> -->
  </section>
</template>

<script setup lang="ts">
import { createNamespacedHelpers } from 'vuex-composition-helpers';
// import ProductCard from '@/components/ProductCard.vue';

const { useState, useActions } = createNamespacedHelpers('products');
const { fetchProducts } = useActions(['fetchProducts']);
const { products } = useState(['products']);

if (products.value.length === 0) {
  fetchProducts();
}
</script>
