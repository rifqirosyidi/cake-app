import { BUY_ICE } from "./iceType";

const initState = {
  numIce: 20,
};

const iceReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numIce: state.numIce - 2,
      };
    default:
      return state;
  }
};

export default iceReducer;
