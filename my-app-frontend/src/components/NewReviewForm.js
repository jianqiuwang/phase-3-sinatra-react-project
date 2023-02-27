import React, {useState} from "react";

function NewReviewForm({onAddReview, listing_id}) {
    const [user_name, setUser_Name] = useState("")
    const [score, setScore] = useState(0)
    const [comment, setComment] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name : user_name,
        score : score,
        comment : comment,
        listing_id : listing_id
      }),
    })
      .then((r) => r.json())
      .then((newReview) => {
        onAddReview(newReview);
      });
  }

  return (
    <form className="new-review" onSubmit={handleSubmit}>
      <input className="input" type="text" name="username" placeholder="username" onChange={(e)=>setUser_Name(e.target.value)}/>
      <input className="input" type="number" name="score" placeholder="score" onChange={(e)=>setScore(e.target.value)}/>
      <input className="input" type="text" name="comment" placeholder="comment" onChange={(e)=>setComment(e.target.value)}/>
      <button className="input" type="submit">Submit</button>
    </form>
  );
}

export default NewReviewForm