// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(rootReducer, composeWithDevTools);
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/mainReducers";
const store = configureStore({
  reducer: rootReducer,
});
export default store;
