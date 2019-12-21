import React from "react";
import Rellax from 'rellax';


class slide extends React.Component {
  componentDidMount(){
    this.rellax = new Rellax('.rellax');
    this.resetTransforms();
  };
  resetTransforms = () => {
  /*
    refreshing the page on 2nd slide the parallax broke and add extra 3d transforms

    reset the transforms state of all slides when refresh page on the 2nd slide
  */
    const slides = document.querySelectorAll('.s-text');
    slides.forEach(slide => {
      slide.style.transform = 'translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px)';
    });
  }
  render(){
  const slides = this.props.slides.map((item, index) => {
    return (
      <div key={index} className="s-container">
        <div style={{top: item.top}} className={'s-text rellax s-text-' + item.id} data-rellax-speed='6'>
          <h1 style={{color: item.color}}>{item.h1}</h1>
          <p style={{color: item.color}}>
            <strong>{item.p}</strong>
          </p>
        </div>
        <div className={'s-image s-image-'+item.id}>
          <img src={item.img} alt={'IMG_' + index + 1}/>
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