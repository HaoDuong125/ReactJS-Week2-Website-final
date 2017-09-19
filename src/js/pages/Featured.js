import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "TiVi",
      "Dien Thoai",
      "Laptop",
      "Dong Ho",
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Thong tin Danh Muc San Pham",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    console.log("featured");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>

        <div class="row">{Articles}</div>
      </div>
    );
  }
}