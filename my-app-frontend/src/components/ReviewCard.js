import React, {useState}from "react"

function ReviewCard({review}){
    return (
        <div className="reviewcard">
            <h2>UserName : {review.user_name}</h2>
            <h2>Score : {review.score}</h2>
            <h2>comments: {review.comment}</h2>
            <h2>list id: {review.listing_id}</h2>
        </div>
    )
}

export default ReviewCard