<template>
  <nav :class="{ active: isActive }" class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">
      <img
        width="30"
        height="30"
        class="d-inline-block align-top"
        src="assets/logo.png"
        alt="logo"
      />
    </router-link>
    <button class="navbar-toggler" type="button" @click="handleToggleMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="{ show: isMenuToggled }" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li v-for="link in links" :key="link.id" class="nav-item active">
          <router-link :to="link.to" class="nav-link active">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="navigation__cart">
      <Icon name="cart" height="1.2rem" width="1.2rem" />
      <span> ( {{ count }} ) </span>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createNamespacedHelpers } from 'vuex';

import Icon from '@/components/base/Icon';

const { mapState } = createNamespacedHelpers('cart');

// eslint-disable-next-line no-console
console.log('mapState([count])', mapState(['count']));

export default defineComponent({
  name: 'ShopNav',
  components: {
    Icon,
  },
  data() {
    return {
      isActive: false,
      isMenuToggled: false,
      links: [
        {
          id: 'Home',
          name: 'Home',
          to: '/',
        },
        {
          id: 'About',
          name: 'About',
          to: '/',
        },
        {
          id: 'Shop',
          name: 'Shop',
          to: '/shop',
        },
      ],
    };
  },
  computed: {
    ...mapState(['count']),
  },
  mounted() {
    const scrollFunction = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        this.applyScroll();
      } else {
        this.applyScroll();
      }
    };
    // When the user scrolls down 50px from the top of the document, resize the header's font size
    window.onscroll = function onscroll() {
      scrollFunction();
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    applyScroll() {},
    handleToggleMenu() {
      this.isMenuToggled = !this.isMenuToggled;
    },
  },
});
</script>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: space-around;
}

.navigation__ {
  margin-left: 0.5rem;
  position: relative;
}
</style>
