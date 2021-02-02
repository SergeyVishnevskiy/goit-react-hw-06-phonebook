import { createReducer } from "@reduxjs/toolkit";
import { filterEdit } from "../actions/filterAction";

export default createReducer("", {
  [filterEdit]: (state, action) => action.payload,
});

// import { EDIT_FILTER } from '../constants/constants';
// const initState = "";
// export default (state = initState, action) => {
//   switch (action.type) {
//     case EDIT_FILTER:
//       return action.payload;
//     default:
//       return state;
//   }
// };
