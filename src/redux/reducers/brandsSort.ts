import * as actionTypes from "../actionTypes";

interface itemsState {
  brands: object | null;
}

type Action = {
  type: string;
  payload: object;
};

const initialState = {
  brands: null,
};

const brandsReducer = (state: itemsState = initialState, action: Action) => {
  const { type, payload } = action;
  if (type === actionTypes.BRANDS_ITEMS) {
    return {
      ...state,
      brands: payload,
    };
  } else {
    return state;
  }
};

export default brandsReducer;
