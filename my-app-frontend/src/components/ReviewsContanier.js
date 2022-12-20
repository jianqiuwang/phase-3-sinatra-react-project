import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

function ReviewsContanier(){
    const [reviews, setReviews]=useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/reviews")
        .then(resp=>resp.json())
        .then(reviews=>setReviews(reviews))
      },[])

      const reviewsArray=reviews.map((review)=><ReviewCard key={review.id} review={review}/>)
      console.log(reviewsArray)
   
    return (
      <main>
        <ul className="reviews">
          {reviewsArray}
        </ul>
      </main>
    )
}

export default ReviewsContanier