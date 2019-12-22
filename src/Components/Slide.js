import React from "react";


class slide extends React.Component {
  render(){
  const slides = this.props.slides.map((item, index) => {
    return (
      <div key={index} className="s-container">
        <div style={{top: item.top}} className={'container__text container__text-' + item.id}>
          <h1 style={{color: item.color}}>{item.h1}</h1>
          <p style={{color: item.color}}>
            <strong>{item.p}</strong>
          </p>
        </div>
        <div className={'container__image container__image__'+item.id}>
          <img src={item.img} loading='lazy' alt={'IMG_' + index + 1}/>
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