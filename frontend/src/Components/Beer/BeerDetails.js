import React from "react";
import Navbar from "../Home/Navbar";
import BeerList from "../Beer/BeerList";
import ReviewForm from "../Users/ReviewForm";
import ReviewCard from "../Users/ReviewCard";

export default function BeerDetails() {
    //ToDo: add review list to bottom, pretty up the info text, shrink pic with window resize, standardize pic size/aspect
    // use math for average rating

    //fetch: get beer by id, get reviews by beerID, add a review to a beer ID, get average review score

        return(
            <div>
            <Navbar />
               <div className="beerStats">
                <div className="beerImage">
                 <img src="https://pyxis.nymag.com/v1/imgs/1ef/403/49499034ebf7c1fc90c366162319691a36-13-duff-beer.rsquare.w700.jpg" className="breweryBanner" />
                </div>
                <div className="beerInfo">
                    <h1 className="beerName">Duff</h1>
                    <a href="./BreweryDetails" >Brewed by: Moe's Tavern</a>
                    <ul>
                    <li>Beer Type: Lager</li>
                    <li>ABV: 4.6%</li>
                    <li>Description: Sweet nectar of the gods. Endorsed by Duffman himself.</li>
                    <li>Average Rating: &#127866;</li>
                    
                    </ul>
                </div>
                
            </div>
            <div className="reviewSection">
                <ReviewForm />
                    (import review section by beer, create a form to leave a review for this beer)
                    <ReviewCard />
            </div>
                
            </div>
        )

}