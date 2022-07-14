import { ActionType } from "./ActionType";

export const SetProduct = (products) => {
  return {
    type: ActionType.SET_PRODUCT,
    payload: products,
  };
};

export const SelectProduct = (products) => {
  return {
    type: ActionType.SELECT_PRODUCT,
    payload: products,
  };
};
