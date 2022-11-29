import React from "react";


export default function ReviewCard(props) {
//formatting matches BreweryList or BeerList? (incomplete)


return(
    
    <div className="reviewcard">
            <div className="reviewheader">
                <div className="reviewer">review of: {props.brewName}</div>
                <div className="reviewrating">{props.brewRating} &#127866; &#127866; &#127866;</div>
                </div>

            <div className="reviewcard-details">
                <p className="reviewBody">"I liked this beer"</p>
                <h6>Reviewer: {props.review_author} </h6>
            </div>
           </div>
)
}