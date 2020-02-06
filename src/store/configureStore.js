import { createStore } from "redux";
import rootReducer from "../reducers";
import { INITIAL_STATE } from "../constants/InitialState";

export default function configureStore(initialState = INITIAL_STATE) {
  return createStore(rootReducer, initialState);
}
