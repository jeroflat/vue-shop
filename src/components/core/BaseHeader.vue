<template>
  <header class="header">
    <BaseNav />
  </header>
</template>

<script setup lang="ts">
import BaseNav from './BaseNav.vue';
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
