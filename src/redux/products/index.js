import { combineReducers } from "redux";
import { ProductReducer } from "./ReducerProduct";

const Reducers = combineReducers({
  allProducts: ProductReducer,
});

export default Reducers;
