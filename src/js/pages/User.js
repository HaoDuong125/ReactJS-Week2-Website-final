import React from "react";
import ReactDOM from "react-dom";
import Article from "../components/Article";

export default class User extends React.Component {
  send(){};

  

  render() {
    const Users = [
      "User3",
      "User2",
      "User1",
      
    ].map((title, i) => <Article key={i} title={title}/> );
    const adText = [
      "Information User",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    console.log("user");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}

            </div>
          </div>
          <div>
		<input type= "text" ref= "txt" placeHodel= "Enter your user"/>
		<button onClick={this.send}>SEND</button>
		</div>
        </div>

        <div class="row">
        {Users}
        </div>
      </div>
    );
  }
}


