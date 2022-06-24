<template>
  <LayoutContainer />
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import LayoutContainer from './LayoutContainer.vue';

defineComponent({
  name: 'App',
  components: {
    LayoutContainer,
  },
});
</script>

<style lang="scss">
@import '~styles/styles.scss';
@import '~animate.css';
</style>
