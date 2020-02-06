import * as types from "../constants/ActionTypes";
import { INITIAL_STATE } from "../constants/InitialState";

export default function searchList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_FILTER:
      const filterKey = action.filter.type;
      const filterFunc = (a, b) => {
        if (state.isDesc) {
          if (a[filterKey] > b[filterKey]) return -1;
          if (a[filterKey] < b[filterKey]) return 1;
        } else {
          if (a[filterKey] < b[filterKey]) return -1;
          if (a[filterKey] > b[filterKey]) return 1;
        }
        return 0;
      };
      let sortedData = state.filteredData.sort(filterFunc);

      return {
        ...state,
        filteredData: sortedData,
        isDesc: !state.isDesc
      };

    case types.RECEIVE_USERS:
      return {
        ...state,
        filteredData: [...action.data],
        userData: action.data
      };

    default:
      return state;
  }
}
