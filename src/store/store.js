import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import { reducer } from "./counter.reducer";
import { todoReducer } from "./todo.reducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const rootReducer = combineReducers({
  counter: reducer,
  todo: todoReducer
});

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware())
);
