import React, { Component } from "react";
import FullPage from "./Components/FullPage";
import NavBar from "./Components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchors: ["s1", "s2", "s3"],
      colors: ["#ffa0a0", "#ffc74f", "#9cd6f0"],
      currentView: null
    };
    this.getAnchor = this.getAnchor.bind(this);
    this.setNavBar = this.setNavBar.bind(this);
  }
  getAnchor() {
    // get from body a fp-viewing-sN class every .3ms
    const vpView = document.getElementsByTagName("body");
    const currentView = vpView["0"].className;
    const anchorView = currentView.split("-");
    this.setState({
      // set same string as current anchor array
      currentView: anchorView[2]
    });
  }
  setNavBar(n) {
    const boj = [
      { num: "s1", style: { color: "#ffa0a0" }, svg: "circle" },
      { num: "s2", style: { color: "#ffc74f" }, svg: "square" },
      { num: "s3", style: { color: "#9cd6f0" }, svg: "triangle" }
    ];
    // get the from the parameter the current viewing
    let el = document.getElementsByClassName(n)[0];
    let svg;
    boj.forEach(item => {
      if (el) {
      svg = document.getElementsByClassName(item.svg)[0];
        if (el.className === item.num) {
          el.style.color = item.style.color;
          svg.classList.add("svg-active");
        } else {
          let others = document.getElementsByClassName(item.num)[0];
          others.style.color = "#fff";
          svg.classList.remove("svg-active");
        }
      }
    });
    this.setOffset(n);
  }
  setOffset(n) {
    if (n) {
      let el = document.getElementsByClassName(n)[0];
      let span = document.getElementsByTagName("span")[0];
      span.style.top = el.getBoundingClientRect().bottom + "px";
    }
  }
  render() {
    return (
      <div className="App">
        <FullPage
          anchors={this.state.anchors}
          colors={this.state.colors}
        ></FullPage>
        <NavBar
          getAnchor={this.getAnchor}
          anchors={this.state.anchors}
          setNavBar={this.setNavBar}
          currentView={this.state.currentView}
        ></NavBar>
      </div>
    );
  }
}
export default App;
