<template>
  <BaseLayout />
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import BaseLayout from './BaseLayout.vue';

defineComponent({
  name: 'App',
  components: {
    BaseLayout,
  },
});
</script>

<style lang="scss">
@import '~styles/styles.scss';
@import '~animate.css';
</style>
