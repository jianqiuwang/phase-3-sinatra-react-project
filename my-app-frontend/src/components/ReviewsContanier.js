import ReviewCard from "./ReviewCard";

function ReviewsContanier({reviews}){
  
      const reviewsArray=reviews.map((review)=><ReviewCard key={review.id} review={review}/>)
 
    return (
      <main>
   
        <ul className="reviews">
          {reviewsArray}
        </ul>
      </main>
    )
}

export default ReviewsContanier