import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;
    
    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <a class="btn btn-default" href="#">List Item</a>
      </div>

    );
  }
}


