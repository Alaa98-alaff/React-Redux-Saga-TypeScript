import * as actionTypes from "../actionTypes";

interface itemsState {
  addedItems: any;
  currentAdded: any;
}

type Action = {
  type: string;
  payload: any;
};

const initialState = {
  addedItems: [],
  currentAdded: [],
};

const basketItemsReducer = (
  state: itemsState = initialState,
  action: Action
) => {
  let { type, payload } = action;
  if (type === actionTypes.ADD_ITEM_ID) {
    let ids = state.addedItems;
    let arr = [];

    arr.push(...ids, ...payload.addedItems);

    return {
      ...state,
      addedItems: arr,
      currentAdded: payload.currentAdded,
    };
  } else {
    return state;
  }
};

export default basketItemsReducer;
