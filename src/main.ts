import { createApp } from 'vue';
import App from '@/components/core/App.vue';

import store from '@/store';
import { router } from './router';

createApp(App).use(router).use(store).mount('#app');
