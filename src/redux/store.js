// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(rootReducer, composeWithDevTools);
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/mainReducers";
console.log(process.env.NODE_ENV);
const store = configureStore({
  reducer: rootReducer,
});
export default store;
