import { combineReducers } from "redux";
import items from "./itemsReducers";
import filter from "./filterReducers";

const rootReducer = combineReducers({
  items,
  filter,
});

export default rootReducer;
