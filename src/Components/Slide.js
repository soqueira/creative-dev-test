import React from "react";
import Rellax from 'rellax';


class slide extends React.Component {
  componentDidMount(){
    this.rellax = new Rellax('.rellax');
  };
  render(){
  const slides = this.props.slides.map((item, index) => {
    return (
      <div key={index} className="s-container">
        <div style={{top: item.top}} className="s-text rellax" data-rellax-speed='4'>
          <h1 style={{color: item.color}}>{item.h1}</h1>
          <p style={{color: item.color}}>
            <strong>{item.p}</strong>
          </p>
        </div>
        <div className="s-image">
          <img src={item.img} alt=""/>
        </div>
      </div>
    )
  });
    return (
      <div className="s-content">
      {slides}
    </div>
    )
  }
};
export default slide;