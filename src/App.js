import React, { Component } from "react";
import FullPage from "./Components/FullPage";
import NavBar from "./Components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchors: ["s1", "s2", "s3"],
      colors: ["#ffa0a0", "#ffc74f", "#9cd6f0"],
      currentView: null || "s1"
    };
  }
  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      this.getAnchor();
      this.parallax();
    });
    window.addEventListener("load", () => {
      this.getAnchor();
    });
  };
  parallax = () => {
    let parallaxText = document.querySelectorAll('.s-text');
    parallaxText.forEach(item => {  
      item.style.transform = `translate(0px, ${window.pageYOffset / 3}px)`;
    });
  };
  getAnchor = () => {
    // get the current view taking from body class
    const vpView = document.getElementsByTagName("body");
    const currentView = vpView["0"].className;
    const anchorView = currentView.split("-");
    this.setState({
      currentView: anchorView[2]
    });
    this.setNavBar(this.state.currentView);
  };
  setNavBar = n => {
    this.setLinkColor();

    const boj = [
      {
        id: 1,
        num: "s1",
        style: { color: "#ffa0a0" },
        svg: "circle"
      },
      {
        id: 2,
        num: "s2",
        style: { color: "#ffc74f" },
        svg: "square"
      },
      {
        id: 3,
        num: "s3",
        style: { color: "#9cd6f0" },
        svg: "triangle"
      }
    ];
    let link = document.getElementsByClassName(n)[0];
    let svg;
    // show svg when link is active
    boj.forEach(item => {
      if (link) {
        // get the first className of a link element
        let linkClassName = link.classList[0];
        svg = document.getElementsByClassName(item.svg)[0];
        if (linkClassName === item.num) {
          link.style.color = item.style.color;
          svg.classList.add("svg-active");
        } else {
          svg.classList.remove("svg-active");
        }
      }
    });
    this.setSvgOffset(n);
  };
  setLinkColor = () => {
    // set all links the color of displayed svg
    const colors = [
      { color: "#00347D", view: "s1" },
      { color: "#E93800", view: "s2" },
      { color: "#8A1935", view: "s3" }
    ];
    let linkColor;
    let cView = this.state.currentView;
    colors.forEach(item => {
      let link = document.querySelectorAll(".link");
      if (item.view === cView) {
        linkColor = item.color;
        for (let i = 0; i < link.length; i++) {
          link[i].style.color = linkColor;
        }
      }
    });
  };
  setSvgOffset(n) {
    /*
      make the sliding effect on navbar
      getting the left and bottom position relative to the viewport
    */
    if (n) {
      let el = document.getElementsByClassName(n)[0];
      let span = document.getElementsByTagName("span")[0];
      /*
        less than 495px wide from the el to left is mobile
        getting the left position
      */
      if (el.getBoundingClientRect().left <= 333) {
        // mobile
        span.style.left = el.getBoundingClientRect().left + "px";
        span.style.top = el.getBoundingClientRect().bottom + "px";
      } else {
        // desktop
        span.style.left = "inherit";
        span.style.top = el.getBoundingClientRect().bottom + "px";
      }
    }
  }
  render() {
    return (
      <div className="App">
        <FullPage
          anchors={this.state.anchors}
          colors={this.state.colors}
        ></FullPage>
        <NavBar anchors={this.state.anchors}></NavBar>
      </div>
    );
  }
}
export default App;
