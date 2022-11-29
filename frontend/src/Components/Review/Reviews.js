import React from 'react'
import ReviewCard from './ReviewCard'

export default function Reviews(props) {
    const [reviews, setReviews] = React.useState("Hello")

    // React.useEffect(
    //     fetch("http://localhost:8081/reviews/100")
    //         .then(res => res.json())
    //         .then(data => setReviews(data)), [])
    console.log(props.user)
    function getData() {
        fetch("http://localhost:8081/reviews/100")
            .then(res => res.json())
            .then(data => setReviews(data.map(item => <ReviewCard reviewAuthor={item.reviewAuthor} reviewId={item.reviewId} review={item.review} rating={item.rating}/>)))
    }

    console.log(reviews)

    return (
        <div>
            {reviews}
            <button onClick={getData}>Click Me</button> 
        </div>
    )
}