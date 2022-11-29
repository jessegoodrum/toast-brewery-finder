import React from "react";
import Navbar from "../Home/Navbar";
//import BeerList from "../Beer/BeerList";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BreweryData from "./BreweryData";
import {useStore} from 'react-redux'

export default function BreweryDetails(props) {
    //trying to recieve the brewery ID# from the clicked on breweryCard
    //fetch: get brewery by id, get beer list by breweryID, get average of all beer ratings combined
    const [breweryData, setBreweryData]= useState(<BreweryData />)


    let { id } = useParams();

    const store = useStore()
    const token = store.getState().token.token
    const user = store.getState().user;
    console.log(user)
    

    React.useEffect(()=>{ //calls brewery info from ID# passed from breweryCard
        fetch("http://localhost:8081/breweries/" + id, {headers: {'Authorization' : 'Bearer ' + token}} )
        .then(res => res.json())
        .then(data => setBreweryData(
            <BreweryData breweryId={data.breweryId}
            breweryName={data.breweryName}
            breweryImg={data.breweryImg}
            breweryHours={data.breweryHours}
            breweryHistory={data.breweryHistory}
            breweryEmail={data.breweryEmail}
            breweryPhone={data.breweryPhone}
            breweryWebsite={data.breweryWebsite}
            breweryAddress={data.breweryAddress}
            breweryActive={data.breweryActive}
            /> 
            ))
    }, [])

    

        return( 
            <div>
                {breweryData}
            </div>
        )

}



// <div className="breweryHeader">
//             <img src={props.image} className="breweryBanner" />
//             <h1 className="breweryName"> recieved brewery Id: {props.brewId}</h1>
//             </div>
//             <div className="breweryDetails">
//                 <div className="breweryInfo">
//                     <ul>
//                     <li>Average Beer Score: &#127866; &#127866; &#127866;</li>
//                     <li>breweryOwner: Moe Szyslak</li>
//                     <li>address: Main st, Springfield MA</li>
//                     <li>hours: 4pm-2am weekdays, sunday 12pm-10pm</li>
//                     <li>contactPhone: *disconnected*</li>
//                     <li>contactEmail: StopPrankCallingMe@Compuserve.com</li>
//                     <li>about: Where the elite meet to fete. We had an Aerosmith concert one time. Could happen again, I ain't saying for sure.</li>
//                     <li>{props.website}</li>
//                     </ul>
//                 </div>
//                 <div className="breweryBeers">
//                 <h4>(fetch beerlist by brewery id)</h4>
//                     <BeerList />
//                 </div>

//             </div>
