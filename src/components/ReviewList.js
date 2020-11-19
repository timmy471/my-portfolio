import React, { useState } from "react";
import Review from '../components/Review';

const ReviewList = ({ reviews, index }) => {

const [name, setName] = useState('');
const [text, setText] = useState('');

const review = reviews.filter(review => review.id === index)

const onLoadImage = ()=>{
	setText(review[0].text);
	setName(review[0].name);
}


	return (
		<Review
			name={name}
			image={review[0].image}
			text={text}
			onLoadImage={onLoadImage}
		/>

	);
};

export default ReviewList;
