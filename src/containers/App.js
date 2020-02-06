import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import SortApp from "./SortApp";
import rootReducer from "../reducers";
import { fetchUsers } from "../actions";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default class App extends Component {
  componentDidMount() {
    store.dispatch(fetchUsers(this.props.store));
  }

  render() {
    const { store } = this.props;

    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <Provider store={store}>
          <SortApp store={store} />
        </Provider>
      </div>
    );
  }
}
