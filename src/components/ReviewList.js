import React from "react";
import Review from '../components/Review';

const ReviewList = ({reviews,index}) => {

	const review = reviews.filter(review => review.id === index)
	return (
		<Review 
			name={review[0].name}
			image={review[0].image}
			text={review[0].text}
		/>
        
	);
};

export default ReviewList;
