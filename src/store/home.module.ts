interface State {
    isLoading: boolean,
    products: Array<Object>
}

const state:State = {
  isLoading: true,
  products: [],
};

export default {
  state,
};
