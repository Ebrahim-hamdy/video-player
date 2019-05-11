import React from "react";
import ReactDOM from "react-dom";

import VideoComponent from "./components/Video/Video.component";

import './../public/assets/sass/global.scss'

class App extends React.Component {
  render() {
    return <VideoComponent />;
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
