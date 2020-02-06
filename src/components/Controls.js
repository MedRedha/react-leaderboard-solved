import React, { Component } from "react";

export default class ControlsBar extends Component {
  render() {
    const { onSorted } = this.props;

    return (
      <div className="content">
        <button className="btn btn-primary" onClick={() => onSorted("rank")}>
          Sort by rank
        </button>
        <button className="btn btn-primary" onClick={() => onSorted("points")}>
          Sort by points
        </button>
        <button className="btn btn-primary" onClick={() => onSorted("name")}>
          Sort by name
        </button>
        <button className="btn btn-primary" onClick={() => onSorted("age")}>
          Sort by age
        </button>
      </div>
    );
  }
}
