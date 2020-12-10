import React, { useEffect, useState } from "react";

export class MovieList extends React.Component {
  state = { list: [] };
  componentDidMount() {
    const { year } = this.props;
    let Http = new XMLHttpRequest(),
      response = [],
      url = "https://jsonmock.hackerrank.com/api/movies?Year=" + year;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
      response = JSON.parse(Http.responseText);
      this.setState({ list: response.data });
    };
  }
  render() {
    console.log(this.state.list);
    const { list } = this.state;

    return (
      <div>
        {list && list.length > 1 && list.map((i) => <div>{i.Title}</div>)}
      </div>
    );
  }
}
