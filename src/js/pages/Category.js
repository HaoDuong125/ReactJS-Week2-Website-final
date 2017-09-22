import React from "react";

import Article from "../components/Article";

export default class Category extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const Categories = [
      "Samsung",
      "LG",
      "Apple",
      "Panasonic",
      
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>Category</h1>
        article: {article}, date: {date}, filter: {filter}
        <div class="row">{Categories}</div>
      </div>
    );
  }
}