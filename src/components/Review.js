import React from "react";

const Review = ({ name,image,text, onLoadImage}) => {

	return (
		<p>
			<img src={image} alt="" onLoad={onLoadImage}/>
			<i className="quote fas fa-quote-right fa-3"></i>
			{text}
			<small>- {name}</small>
		</p>
	);
};

export default Review;
