import * as actionTypes from "../actionTypes";

interface itemsState {
  addedItems: any;
  currentAdded: any;
  isClicked: boolean;
}

type Action = {
  type: string;
  payload: any;
};

const initialState = {
  addedItems: [],
  currentAdded: [],
  isClicked: false,
  totalPrice: 0,
};

const basketItemsReducer = (
  state: itemsState = initialState,
  action: Action
) => {
  let { type, payload } = action;
  if (type === actionTypes.ADD_ITEMS_BASKET) {
    let items = state.addedItems;

    if (items.length === 0) {
      payload.amount = 1;

      items.push(payload);
    } else {
      let itemsIndex = items?.findIndex((item: any, index: number) => {
        return item.added === payload.added;
      });

      if (itemsIndex !== -1) {
        items[itemsIndex].amount = items[itemsIndex].amount + 1;
      } else {
        payload.amount = 1;
        items.push(payload);
      }
    }

    let total = 0;

    items.forEach((el: any) => {
      total += el.amount * el.price;
    });

    return {
      ...state,
      addedItems: items,
      totalPrice: total,
    };
  } else if (type === actionTypes.DELETE_ITEMS_BASKET) {
    let items = state.addedItems;

    let itemsIndex = items?.findIndex((item: any, index: number) => {
      return item.added === payload.added;
    });

    if (itemsIndex !== -1) {
      if (items[itemsIndex].amount === 1) {
        items.splice(itemsIndex, 1);
      } else {
        items[itemsIndex].amount = items[itemsIndex].amount - 1;
      }
    }

    let total = 0;

    items.forEach((el: any) => {
      total += el.amount * el.price;
    });
    return {
      ...state,
      addedItems: items,
      totalPrice: total,
    };
  } else if (type === actionTypes.BASKET_ADD_CLICKED) {
    let isClicked = state.isClicked;
    state.isClicked = !isClicked;
    return {
      ...state,
    };
  } else {
    return state;
  }
};

export default basketItemsReducer;
