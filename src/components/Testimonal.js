import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import ReviewList from './ReviewList';


const Testimonal = ({ reviews, imgPerson, text, name, index, slideLeft, slideRight, setIndex }) => {

  
  return (
    <section id="testimonal">
      <div className="testimonal-top">
        <span id="testimonal-top-circle-left"></span>
        <span id="testimonal-top-circle-right"></span>
      </div>

      {/* {testimonial.filter(item => item.id === )} */}
      {/* <Review testimonial={testimonial}/> */}

      <ReviewList reviews={reviews} index={index}/>
      {/* <p>
        <img src={reviews[index].person} alt="" /> 
        <i className="quote fas fa-quote-right fa-3"></i>
        {reviews[index].text}
        <small>- {reviews[index].name}</small>
      </p> */}
          
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
