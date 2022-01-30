import * as actionTypes from "../actionTypes";

interface itemsState {
  loading: any;
}

type Action = {
  type: string;
  payload: any;
};

const initialState = {
  loading: false,
};

const loadingReducer = (state: itemsState = initialState, action: Action) => {
  const { type, payload } = action;

  if (type === actionTypes.LOADING_LOCK) {
    return {
      ...state,
      loading: payload.loading,
    };
  } else {
    return state;
  }
};

export default loadingReducer;
