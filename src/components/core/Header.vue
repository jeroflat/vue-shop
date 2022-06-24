<template>
  <header class="header">
    <Navigation />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Navigation from './Navigation.vue';

export default defineComponent({
  name: 'ShopHeader',
  components: {
    Navigation,
  },
});
</script>

<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
