import * as actionTypes from "../actionTypes";

interface itemsState {
  brands: object | any;
}

type Action = {
  type: string;
  payload: any;
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
  } else if (type === actionTypes.SORTED_BRANDS_DATA) {
    let brands = state.brands;
    let { currentType } = payload;

    if (currentType === "Price low to high") {
      brands = brands?.sort((a: any, b: any) => {
        return a.price - b.price;
      });
    }

    if (currentType === "Price high to low") {
      brands = brands?.sort((a: any, b: any) => {
        return b.price - a.price;
      });
    }

    if (currentType === "New to old") {
      brands = brands?.sort((a: any, b: any) => {
        return b.added - a.added;
      });
    }

    if (currentType === "Old to new") {
      brands = brands?.sort((a: any, b: any) => {
        return a.added - b.added;
      });
    }
    return {
      ...state,
      brands: brands,
    };
    // }

    // else if(type === actionTypes.ITEMS_MUG){
    // let brands = state.brands;
    // ==> filter

    // ==>  return {
    //   ...state,
    //   brands: brands,
    // };
  } else {
    return state;
  }
};

export default brandsReducer;
