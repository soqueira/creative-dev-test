import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const fullPage = ({anchors, colors}) => (
  <ReactFullpage
    //fullpage options

    // Navigation
    anchors={anchors}
    // Design
    sectionsColor = {colors}
    // Accessibility
	  keyboardScrolling = {true}
	  animateAnchor = {true}
	  recordHistory = {true}
    // Scrolling
    lazyLoading = {true}
    easingcss3 = {'cubic-bezier(.58,-0.29,.39,1.36)'}
    render={() => {
    
      return (
        <ReactFullpage.Wrapper>
          <section className="section">
          </section>
          <section className="section">
          </section>
          <section className="section">
          </section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default fullPage;