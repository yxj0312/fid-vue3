import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/index.css';

import ApiService from './common/api.service';

export const app = createApp(App);
app.use(router);
ApiService.init();
app.mount('#app');
export default app;
