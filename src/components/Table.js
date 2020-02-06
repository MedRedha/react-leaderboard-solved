import React, { Component } from "react";

export default class Table extends Component {
  renderTableHeader(users) {
    let title = Object.keys(users[0]);
    let thead = title.map((key, index) => <th key={index}>{key}</th>);
    return <tr>{thead}</tr>;
  }

  renderTableData(users) {
    return users.map((user, index) => {
      let { rank, points, name, age } = user;
      return (
        <tr key={index}>
          <td>{rank}</td>
          <td>{points}</td>
          <td>{name}</td>
          <td>{age}</td>
        </tr>
      );
    });
  }

  render() {
    const { filteredData } = this.props;
    if (!filteredData.length)
      return <div className="content">No relevant data</div>;

    return (
      <div className="content">
        <table className="table table-striped">
          <tbody>
            {this.renderTableHeader(filteredData)}
            {this.renderTableData(filteredData)}
          </tbody>
        </table>
      </div>
    );
  }
}
