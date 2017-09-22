import React from "react";

import Article from "../components/Article";

export default class Product extends React.Component {
  render() {
    const Products = [
      "TiVi- LG",
      "TiVi- Panasonic",
      "TiVi- Samsung",
      "I=Phone",
      "Samsung Galaxy Note",
      "Xiaomi",
      "DELL",
      "Appple",
      "Asus",
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Information Products",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    console.log("product");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>

        <div class="row">{Products}</div>
      </div>
    );
  }
}