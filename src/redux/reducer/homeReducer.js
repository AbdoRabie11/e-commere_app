const initalState = {
  products: [],
};

const homeReducer = (state = initalState, action) => {
  const {type , payload} = action;

  if (type === 'GET_PRODUCTS') {
    return {
      ...state,
      products: payload,
    };
  }

  return {
    ...state,
  };
};

export default homeReducer;
