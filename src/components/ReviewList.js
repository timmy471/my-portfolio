import React, { useState, useEffect } from "react";
import Review from '../components/Review';

const ReviewList = ({ reviews, index }) => {

	const review = reviews.filter(review => review.id === index)

	const [image, setImage] = useState('')
	const [name, setName] = useState('');
	const [text, setText] = useState('');

	useEffect(() => {
		setTimeout(() => {
			setImage(review[0].image);
			setName(review[0].name)
			setText(review[0].text)
		}, 2);
	}, );
	
	return (
		<Review
			name={name}
			image={image}
			text={text}
		/>

	);
};

export default ReviewList;
