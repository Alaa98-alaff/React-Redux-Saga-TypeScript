import * as actionTypes from "../actionTypes";

interface itemsState {
  items: object | null;
}

type Action = {
  type: string;
  payload: object;
};

const initialState = {
  items: null,
};

const itemsReducer = (state: itemsState = initialState, action: Action) => {
  const { type, payload } = action;

  if (type === actionTypes.ITEMS_DATA) {
    return {
      ...state,
      items: payload,
    };
  } else {
    return state;
  }
};

export default itemsReducer;
