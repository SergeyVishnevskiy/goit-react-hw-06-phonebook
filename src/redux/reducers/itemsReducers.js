import { createReducer } from "@reduxjs/toolkit";
import { userAdd, userDelete } from "../actions/itemsAction";

export default createReducer([], {
  [userAdd]: (state, action) => [...state, action.payload],
  [userDelete]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

// import { ADD_USER, DELETE_USER } from "../constants/constants";
// const initState = "";
// export default (state = initState, action) => {
//   switch (action.type) {
//     case ADD_USER:
//       return [...state, action.payload];
//     case DELETE_USER:
//       return state.filter((item) => item.id !== action.payload);
//     default:
//       return state;
//   }
// };
