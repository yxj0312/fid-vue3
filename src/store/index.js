import { createStore } from 'vuex';

import home from './home.module.ts';

const store = createStore({
  modules: {
    home,
  },
});

export default store;
