import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Harlem from '@harlem/core';
import './assets/styles/index.css';

createApp(App).use(router).use(Harlem).mount('#app');