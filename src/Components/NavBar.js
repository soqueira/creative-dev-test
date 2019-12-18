import React from "react";

const navBar = ({getAnchor, anchors, setNavBar, currentView}) => {
  // initialize the current anchor to positioning the svg
  // and update location of the svg
    setTimeout(() => {
      getAnchor()
      setNavBar(currentView)
    }, 200);
    let itens;
    itens = anchors.map((view, index) => {
        return (
            <li key={index}><a className={view} href={'#' + view} >{index + 1}</a></li>
        );
    });
  return (
    <div className="nav">
      <nav>
        <span>
          <svg className="circle" viewBox="0 0 96 96">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Slide_01" transform="translate(-1239.000000, -105.000000)" fill="#00347D">
                <rect id="circle" x="1239" y="105" width="96" height="96" rx="48"></rect>
              </g>
            </g>
          </svg>
          <svg className="square" width="118px" height="118px" viewBox="0 0 118 118">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Slide_02" transform="translate(-1227.000000, -404.000000)" fill="#E93800">
                <rect id="square" transform="translate(1286.000000, 463.000000) rotate(-15.000000) translate(-1286.000000, -463.000000) " x="1238" y="415" width="96" height="96"></rect>
              </g>
            </g>
        </svg>
        <svg className="triangle" width="118px" height="114px" viewBox="0 0 118 114">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Slide_03" transform="translate(-1221.000000, -698.000000)" fill="#8A1935">
              <polygon id="triangle" transform="translate(1293.375000, 778.875000) rotate(-315.000000) translate(-1293.375000, -778.875000) " points="1238.39745 720.185137 1348.35255 770.036165 1249.71116 837.564863"></polygon>
           </g>
          </g>
        </svg>
      </span>
        <ul>
          {itens}
        </ul>
      </nav> 
    </div>
  );
    }
export default navBar;
