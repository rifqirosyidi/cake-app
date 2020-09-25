import { BUY_CAKE } from "./cakeTypes";

const initState = {
  numCakes: 10,
};

const cakeReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numCakes: state.numCakes - action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
