import React from "react";
import AddReviewForm from "../Review/AddReviewForm";
import ReviewCard from "../Review/ReviewCard";
import { useStore } from "react-redux";
import axios from "axios";


export default function BeerList(props) {

   


    const[selected, setSelected] = React.useState(false)
    const[reviews, setReviews] = React.useState(null)
    const[rating, setRating] = React.useState(0)
    const[isActive, setIsActive] = React.useState(props.isActive)

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

    async function handleSubmit(event){
        
        event.preventDefault();
        const beerData = {beerId: props.beerId,
        beerName: props.beerName, 
        breweryId: props.brewery,
        beerImg: props.beerImage,
        beerAbv: props.beerAbv,
        beerType: props.beerType,
        beerDescription: props.beerDesc,
        beerActive:!isActive,
        }
        

            axios.put("http://localhost:8081/updatebeer/", beerData, headers)
            //can we make this conditional based on response?
            alert("Beer updated successfully.")
    }

    function toggleActive(event){
        setIsActive(oldActive => !oldActive)
        event.preventDefault();
        handleSubmit(event)
        
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

return(
    <div className="beercard">
            
            <div className="beercard-details">
                {props.role === "ROLE_ADMIN" && <h2 className="beer-id">Beer ID: {props.beerId}</h2>}
                <h2>{props.beerName}</h2>
                <h4 className="beerType">Type: {props.beerType}</h4> 
                {rating != 0 && <h5 className="iconRating">Average Rating:  <span> {mugCount()}</span> ({rating}/5)</h5>}
                <div className="accordion">
                        <div className={selected ? 'info show' : 'info'}>
                            <h6 className="beerAbv">ABV: {props.beerAbv}</h6>
                            <h6 className="beerDesc">{props.beerDesc}</h6>
                            
                            {reviews != 0 
                            ? <div className='review-section'>
                                <h6 style={{fontWeight: "bolder"}}>Reviews:</h6>
                                <div className = 'reviews-container'>
                                    {reviews}
                                </div>
                              </div> 
                            : <strong>No ratings yet.</strong>}
                        </div>
                    <div className="title" onClick={toggle}>
                        <h6>{selected ? '^ Close ^' : 'v See details & reviews v'}</h6>
                        
                    </div>
                    <span> Active and viewable to the public? </span>
                    {props.breweryActive ? <input type="checkbox" checked={isActive} onChange={toggleActive}/> : <h6>(New brews may be added, but will remain disabled by default until brewery is approved. Once Brewery is active, beers may be activated individually.)</h6>}
                </div>
            </div>
           
    </div>    
)
}