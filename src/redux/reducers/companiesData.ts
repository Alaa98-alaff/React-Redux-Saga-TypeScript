import * as actionTypes from "../actionTypes";

interface companiesState {
  companies: object | null;
}

type Action = {
  type: string;
  payload: object;
};

const initialState = {
  companies: null,
};

const companiesReducer = (
  state: companiesState = initialState,
  action: Action
) => {
  const { type, payload } = action;
  if (type === actionTypes.COMPANIES_DATA) {
    return {
      ...state,
      companies: payload,
    };
  } else {
    return state;
  }
};

export default companiesReducer;
