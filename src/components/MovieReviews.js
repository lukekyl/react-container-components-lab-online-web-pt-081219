// Code MovieReviews Here
import React from 'react';

const MovieReview = ({ reviews }) => (
    
    <div className="review-list">
        {reviews.map(review => <div key={review.id} className="review"><h3> {review.headline} </h3></div> )}
    </div>

)

export default MovieReview