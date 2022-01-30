import * as actionTypes from "../actionTypes";

interface itemsState {
  sortedItems: object | null;
}

type Action = {
  type: string;
  payload: object;
};

const initialState = {
  sortedItems: null,
};

const sortedItemsReducer = (
  state: itemsState = initialState,
  action: Action
) => {
  const { type, payload } = action;
  if (type === actionTypes.SORTED_ITEMS_DATA) {
    return {
      ...state,
      sortedItems: payload,
    };
  } else {
    return state;
  }
};

export default sortedItemsReducer;
