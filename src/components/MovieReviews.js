// Code MovieReviews Here
import React, { Component } from 'react'

const MovieReviews = (props) => {

    let reviews = props.reviews.map((review, i) => {
        return <li key={i} className="review">
            <h2>{review.display_title}</h2>
            <h3>{review.headline}</h3>
            <p>{review.summary_short}</p>
        </li>
    })
    
        return (
            <div className="review-list">
                 <ul>{reviews}</ul>
            </div>
        )
    
}

export default MovieReviews
