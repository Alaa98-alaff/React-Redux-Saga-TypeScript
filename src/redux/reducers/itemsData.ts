import { click } from "@testing-library/user-event/dist/click";
import * as actionTypes from "../actionTypes";

interface itemsState {
  items: object | any;
  sortedItems: object | any;
  clicked: Boolean;
}

type Action = {
  type: string;
  payload: any;
};

const initialState = {
  items: null,
  sortedItems: [],
  clicked: false,
};

const itemsReducer = (state: itemsState = initialState, action: Action) => {
  const { type, payload } = action;

  if (type === actionTypes.ITEMS_DATA) {
    return {
      ...state,
      items: payload,
    };
  } else if (type === actionTypes.SORTED_ITEMS_DATA) {
    let items = state.items;
    let clicked = state.clicked;
    let { currentType } = payload;

    if (currentType === "Price low to high") {
      items = items?.sort((a: any, b: any) => {
        return a.price - b.price;
      });
    }

    if (currentType === "Price high to low") {
      items = items?.sort((a: any, b: any) => {
        return b.price - a.price;
      });
    }

    if (currentType === "New to old") {
      items = items?.sort((a: any, b: any) => {
        return b.added - a.added;
      });
    }

    if (currentType === "Old to new") {
      items = items?.sort((a: any, b: any) => {
        return a.added - b.added;
      });
    }

    return {
      ...state,
      items: items,
      clicked: clicked,
    };
  } else if (type === actionTypes.SORTED_ITEMS_CLICKED) {
    let clicked = state.clicked;
    state.clicked = !clicked;
    return {
      ...state,
    };
  } else {
    return state;
  }
};

export default itemsReducer;
