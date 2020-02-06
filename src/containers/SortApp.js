import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Table from "../components/Table";
import Controls from "../components/Controls";
import * as actions from "../actions";
const { addFilter } = actions;

class SortApp extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  onSorted(type) {
    this.store.dispatch(addFilter({ type }));
  }

  render() {
    const state = this.store.getState();

    return (
      <div className="text-center">
        <Controls onSorted={this.onSorted.bind(this)} />
        <Table filteredData={state.filteredData} />
      </div>
    );
  }
}

const putState = state => {
  return state;
};

const putDispatch = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(putState, putDispatch)(SortApp);
