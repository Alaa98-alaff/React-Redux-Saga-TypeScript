import {
  takeLatest,
  call,
  put,
  takeEvery,
  delay,
  take,
  fork,
} from "redux-saga/effects";

import * as Api from "./Api";
import * as actionTypes from "../actionTypes";

interface Action {
  type: string;
  payload: object;
}

const actionData = function (type: string, payload: object) {
  return { type, payload };
};

export const getItemsDataSaga = function* (action: Action) {
  try {
    const { type, payload } = action;
    const data: object = yield call(Api.itemsData);
    yield put(actionData(actionTypes.ITEMS_DATA, data));
  } catch (error) {
    console.log(error);
  }
};

export const getCompaniesDataSaga = function* (action: Action) {
  try {
    const { type, payload } = action;
    const data: object = yield call(Api.companiesData);
    yield put(actionData(actionTypes.COMPANIES_DATA, data));
  } catch (e) {
    console.log(e);
  }
};

export default function* () {
  yield takeLatest(actionTypes.ITEMS_REQUEST, getItemsDataSaga);
  yield takeLatest(actionTypes.COMPANIES_REQUEST, getCompaniesDataSaga);
}
