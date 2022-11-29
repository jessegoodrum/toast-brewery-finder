import React from "react";
import AddReviewForm from "../Review/AddReviewForm";
import ReviewCard from "../Review/ReviewCard";
import { useStore } from "react-redux";
import {Switch, Route, Redirect, Link, useParams} from 'react-router-dom'


export default function BeerList(props) {

    const[selected, setSelected] = React.useState(false)
    const[reviews, setReviews] = React.useState(null)
    const[rating, setRating] = React.useState(0)

    let totalScore = 0;

    const beerHref = "/BeerDetails/" + props.beerId;
    const customReviewsUrl = "http://localhost:8081/reviews/" + props.beerId;
    const customRatingUrl = "http://localhost:8081/beer/rating/" + props.beerId;
    const store = useStore()
    const userState = store.getState()
    const token = userState.token.token
    const headers = {headers: {'Authorization' : 'Bearer ' + token}}


    function toggle(){
        setSelected(oldSelect => !oldSelect)
    }

    React.useEffect(() => {
        fetch(customReviewsUrl, headers)
            .then(res => res.json())
            .then(data => setReviews(data.map(review => 
                <ReviewCard
                    role={props.role}
                    reviewId={review.reviewId}
                    author={review.reviewAuthor}
                    rating={review.rating}
                    review={review.review}
                />
        )))
        fetch(customRatingUrl, headers)
            .then(res => res.json())
            .then(data => setRating(data))
    })
    
    function mugCount() {
        if (rating>=1 && rating <1.5){
            return <h5>&#127866;</h5>
        }else if (rating>=1.5 && rating <2.5){
            return <h5>&#127866;&#127866;</h5>
        }else if (rating>=2.5 && rating <3.5){
            return <h5>&#127866;&#127866;&#127866;</h5>
        }else if (rating>=3.5 && rating <4.5){
            return <h5>&#127866;&#127866;&#127866;&#127866;</h5>
        }else if (rating>=4.5){
            return <h5>&#127866;&#127866;&#127866;&#127866;&#127866;</h5>
    }
}

    //TODO:
    //able to arrange list by rating? alphabet? Brewery? 

return(
    <section>
        {props.isActive ? <div>
        <div className="beercard">
            
            <div className="beercard-details">
                {props.role === "ROLE_ADMIN" && <h2 className="beer-id">Beer ID: {props.beerId}</h2>}
                <h2>{props.beerName}</h2>
                <h4 className="beerType">Type: {props.beerType}</h4> 
                {rating != 0 && <h5 className="iconRating">Average Rating:  <span> {mugCount()}</span> ({rating}/ 5)</h5>}
                <div className="accordion">
                        <div className={selected ? 'info show' : 'info'}>
                            <h4 className="beerAbv">ABV: {props.beerAbv}</h4>
                            <h5 className="beerDesc">{props.beerDesc}</h5>
                            {props.brewery &&<h5><Link to={`/BreweryDetails/${props.brewery}`} className="breweryLink" >See more about this Brewery!{"\n"}</Link></h5>}
                            
                            {reviews != 0 
                            ? <div className='review-section'>
                                <h5 style={{fontWeight: "bolder"}}>Here's what other Toasters have to say about this beer!</h5>
                                <div className = 'reviews-container'>
                                    {reviews}
                                </div>
                              </div> 
                            : <strong>No ratings yet. Be the first to leave a review!</strong>}

                        <AddReviewForm
                            beerId={props.beerId}
                        />
                    
                        </div>
                    <div className="title" onClick={toggle}>
                        <h6>{selected ? '^ See less... ^' : 'v See more... v'}</h6>
                        
                    </div>
            
                </div>
            </div>
            <img src={props.beerImage} className='cardImage'/>
            </div>  
            </div>:"" }
            </section>
      
    
)
}