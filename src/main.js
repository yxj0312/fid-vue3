import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/index.css';

import ApiService from './common/api.service';

export const app = createApp(App);
app.use(router);
app.use(store);
app.config.performance = true;
ApiService.init();
app.mount('#app');
export default app;
