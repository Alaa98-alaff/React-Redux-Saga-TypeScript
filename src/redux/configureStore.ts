import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import Saga from "./saga/Saga";
import createSagaMiddleware from "redux-saga";
import itemsReducer from "./reducers/itemsData";
import { companiesData } from "./saga/Api";
import companiesReducer from "./reducers/companiesData";

const combinedReducer = combineReducers({
  itemsReducer: itemsReducer,
  companiesReducer: companiesReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(Saga);

export default store;
