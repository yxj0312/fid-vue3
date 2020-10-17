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
  query(resource, params) {
    return app.axios.get(resource, params).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  },
  get(resource) {
    return app.axios.get(`${resource}`).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  },
};

export default ApiService;
