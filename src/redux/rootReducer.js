import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceReducer from "./ice/iceReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  user: userReducer,
});

export default rootReducer;
