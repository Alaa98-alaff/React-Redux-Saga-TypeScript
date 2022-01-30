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
    yield put(actionData(actionTypes.LOADING_LOCK, { loading: true }));
    const { type, payload } = action;
    const data: Array<Object> = yield call(Api.itemsData);
    data.map((item: any) => {
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      item.color = randomColor;
    });

    yield put(actionData(actionTypes.ITEMS_DATA, data));
    yield put(actionData(actionTypes.LOADING_LOCK, { loading: false }));
  } catch (error) {
    console.log(error);
  }
};

export const getCompaniesDataSaga = function* (action: Action) {
  try {
    yield put(actionData(actionTypes.LOADING_LOCK, { loading: true }));

    const { type, payload } = action;
    const data: Array<Object> = yield call(Api.companiesData);
    yield put(actionData(actionTypes.COMPANIES_DATA, data));
    yield put(actionData(actionTypes.LOADING_LOCK, { loading: false }));
  } catch (e) {
    console.log(e);
  }
};

export default function* () {
  yield takeLatest(actionTypes.ITEMS_REQUEST, getItemsDataSaga);
  yield takeLatest(actionTypes.COMPANIES_REQUEST, getCompaniesDataSaga);
}
