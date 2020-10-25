import { createStore } from 'vuex';
import { state } from './state.ts';
// import home from './home.module.ts';

const store = createStore({
  state,
  // modules: {
  //   home,
  // },
});

export default store;
