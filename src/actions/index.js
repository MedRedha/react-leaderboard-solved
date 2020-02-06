import * as types from "../constants/ActionTypes";
import { userData } from "../data/data";

export function addFilter(filter) {
  return {
    type: types.ADD_FILTER,
    filter
  };
}

function receiveUsers(data) {
  return {
    type: types.RECEIVE_USERS,
    data
  };
}

export function fetchUsers(store) {
  return dispatch => store.dispatch(receiveUsers(userData));
}
