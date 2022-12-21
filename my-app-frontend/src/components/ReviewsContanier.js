import React, { useEffect, useState } from "react";
import NewReviewForm from "./NewReviewForm";
import ReviewCard from "./ReviewCard";

function ReviewsContanier({card}){
    const [reviews, setReviews]=useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/reviews")
        .then(resp=>resp.json())
        .then(reviews=>setReviews(reviews))
      },[])

      function handleReview(newReview) {
        setReviews([...reviews, newReview]);
      }

      const reviewsArray=reviews.map((review)=><ReviewCard key={review.id} review={review} card={card}/>)
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