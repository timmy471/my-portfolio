import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const Testimonal = ({ testimonial, index, slideLeft, slideRight, setIndex }) => {

  return (
    <section id="testimonal">
      <div className="testimonal-top">
        <span id="testimonal-top-circle-left"></span>
        <span id="testimonal-top-circle-right"></span>
      </div>
      <p>
        <img src={testimonial[index].person} alt="" /> 
        <i className="quote fas fa-quote-right fa-3"></i>
        {testimonial[index].text}
        <small>- {testimonial[index].name}</small>
      </p>
          
      <div id="navigate-circle"></div>
      <div id="testimonal-bottom">
        <KeyboardArrowLeft className='angle-left' onClick={slideLeft} />
        <span className={`circle one ${index === 0 ? 'indicate' : null }`} onClick={()=>{setIndex(0)}}></span>
        <span className={`circle two ${index === 1 ? 'indicate' : null }`} onClick={()=>{setIndex(1)}}></span>
        <span className={`circle three ${index === 2 ? 'indicate' : null }`} onClick={()=>{setIndex(2)}}></span>

        <KeyboardArrowRight className='angle-right' onClick={slideRight}/>

      </div>
    </section>
  );
}

export default Testimonal;
