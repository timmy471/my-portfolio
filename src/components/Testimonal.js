import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import React from 'react';

const Testimonal = () => {
    return (
        <section id="testimonal">
          <div className="testimonal-top">
            <span id="testimonal-top-circle-left"></span>
            <span id="testimonal-top-circle-right"></span>
          </div>
          <p>
            <img src={require("../img/testimonal.png")} alt="" /> <i className="quote fas fa-quote-right fa-3"></i>
            Very understanding and easily to work with. Even with miles apart.
          </p>
          <div id="navigate-circle"></div>
          <div id="testimonal-bottom">
            <KeyboardArrowLeft className='angle-left' />
              <span className="circle one"></span>
              <span className="circle two"></span>
              <span className="circle three"></span>

            <KeyboardArrowRight className='angle-right' />

          </div>
      </section>
    );
}

export default Testimonal;
