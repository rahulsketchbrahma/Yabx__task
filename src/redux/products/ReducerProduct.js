import { ActionType } from "./ActionType";

const initialState = {
  products: [],
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};
