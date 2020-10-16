import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { API_URL } from './config';
import App from '../App.vue';

export const app = createApp(App);

const ApiService = {
  init() {
    app.use(VueAxios, axios);
    app.axios.defaults.baseURL = API_URL;
  },
};

export default ApiService;
