import React from "react";
// import BreweryDetails from "./BreweryDetails";
import BeerList from "../Beer/BeerCard";
import BeerCard from '../Beer/BeerCard';
import { useStore } from "react-redux";


export default function BreweryData(props) {
    const[beerArray, setBeerArray] = React.useState([])
    const store = useStore()
    const userState = store.getState()
    const token = store.getState().token.token
    const role = userState.user.authorities.length > 0 ? userState.user.authorities[0].name : "No role"

    React.useEffect(()=>{
        fetch(`http://localhost:8081/beersbybrewery/${props.breweryId}`, {headers: {'Authorization' : 'Bearer ' + token}} )
        .then(res => res.json())
        .then(data => setBeerArray(data.map(item => <BeerCard beerId={item.beerId} beerImage={item.beerImg} beerAbv={item.beerAbv} beerName={item.beerName} beerType={item.beerType} beerDesc={item.beerDescription} isActive={item.beerActive} />)))
    },[props.breweryId])

    return(
        <div>
       
        <div className="breweryHeader">
        <img src={props.breweryImg} className="breweryBanner" />
        <h1 className="breweryName"> {props.breweryName}</h1>
        {!props.breweryActive && <h3 className="pendingAlert">**PENDING ACCOUNT - not visible in global lists**</h3>}
        </div>
        <div className="breweryDetails">
            <div className="breweryInfo">
            <p>{props.breweryHistory}</p>
            <p>Address: {props.breweryAddress}</p>
            <p>Hours: {props.breweryHours}</p>
            <p>Phone: {props.breweryPhone}</p>
            <p>Email: {props.breweryEmail}</p>
            <p>Website: {props.breweryWebsite}</p>
            
            
            </div>
            <div className='beerList content'>
            {beerArray}
        </div>

        </div>

        </div>
    )

}