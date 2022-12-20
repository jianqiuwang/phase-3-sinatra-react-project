import React, {useState}from "react"

function ReviewCard({review}){
    return (
        <div className="reviewCard">
            <h2>UserName : {review.user_name}</h2>
            <h3>{review.comment}</h3>
        </div>
    )
}

export default ReviewCard