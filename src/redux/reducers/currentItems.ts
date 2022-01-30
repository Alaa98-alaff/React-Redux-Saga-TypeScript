import * as actionTypes from "../actionTypes";

interface currentItems {
  currentItems: object | null;
}

type Action = {
  type: string;
  payload: object;
};

const initialState = {
  currentItems: null,
};

const currentItemsReducer = (
  state: currentItems = initialState,
  action: Action
) => {
  const { type, payload } = action;
  if (type === actionTypes.CURRENT_ITEMS_DATA) {
    return {
      ...state,
      currentItems: payload,
    };
  } else {
    return state;
  }
};

export default currentItemsReducer;
