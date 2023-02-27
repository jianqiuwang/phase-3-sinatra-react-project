import React from "react"

function ReviewCard({review}){
    console.log(review)
    return (
        <div className="reviewcard">
            <h2>UserName : {review.user_name}</h2>
            <h2>Score : {review.score}</h2>
            <h2>comments: {review.comment}</h2>
            <h2>Description: {review.listing.description}</h2>
        </div>
    )
}

export default ReviewCard