import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Slide from "./Slide";

class fullPage extends React.Component {
  state = {
      slide1: [
      {
        h1: "Creative people live longer.",
        p:
          "Due to their openness, creative minds tend to live longer, and may even get more creative with age. Creative people react to stress, often seeing obstacles as something to be overcome rather than a barrier which can’t be breached.",
        color: '#00347D',
        img: './assets/IMG_01-small.jpg',
        id: 1
      },
    ],
    slide2: [
      {
        h1: 'Positivity makes more creative.',
        p: 
          "While it’s often thought that a case of the blues will get the creative juices flowing, it turns out happiness and motivation actually bring out the highest levels of creative activity.",
        color: '#E93800',
        img: './assets/IMG_02-small.jpg',
        id: 2
      }
    ],
    slide3: [
      {
        h1: "Creativity is additive.",
        p:
        "Everyday creative activity is crucial for creative behaviour. Similar to the notion that practice makes perfect, exercising the creative muscles in your brain is known to boost creative accomplishment.",
        color: '#8A1935',
        img: './assets/IMG_03-small.jpg',
        id: 3,
      }
    ]
  };
  render() {
    return (
      <ReactFullpage
        //fullpage options

        // Navigation
        anchors={this.props.anchors}
        // Design
        sectionsColor={this.props.colors}
        // Accessibility
        keyboardScrolling={true}
        animateAnchor={true}
        recordHistory={true}
        // Scrolling
        scrollingSpeed={700}
        lazyLoading={true}
        scrollBar={true}
        easingcss3={"cubic-bezier(1, 0, 1, 1)"}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <section className="section">
                <Slide slides={this.state.slide1}></Slide>
              </section>
              <section className="section">
                <Slide slides={this.state.slide2}></Slide>
              </section>
              <section className="section">
                <Slide slides={this.state.slide3}></Slide>
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}
// const fullPage = ({anchors, colors}) => (
// );
export default fullPage;
