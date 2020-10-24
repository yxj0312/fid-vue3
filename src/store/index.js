import { createStore } from 'vuex';
import { State, state } from './state';
// import home from './home.module.ts';

const store = createStore({
  state,
  // modules: {
  //   home,
  // },
});

export default store;
