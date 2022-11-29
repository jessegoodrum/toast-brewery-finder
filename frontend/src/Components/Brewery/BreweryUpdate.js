import React from "react";
import Navbar from "../Home/Navbar";
import ReviewCard from "../Users/ReviewCard";
import AddBeerForm from "../Beer/AddBeerForm";
import UserDetails from "../Users/UserDetails";
import SmallBeerCard from '../Brewery/SmallBeerCard';
import { useStore } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../Shared/baseUrl";

export default function BreweryUpdate(props){
//form where brewer can update brewery info and add/deactivate beers
//ToDo: user profile update needs to allow for avatar and password change (pw change not part of MVP, delete inputs if not viable)


const[beerArray, setBeerArray] = React.useState([])

const store = useStore()
const token = store.getState().token.token


const[brewerydetails, setBreweryDetails] =React.useState({
    breweryId: props.breweryId,
    breweryName: props.breweryName,
    breweryImg: props.breweryImg,
    breweryWebsite: props.breweryWebsite,
    breweryPhone: props.breweryPhone,
    breweryEmail: props.breweryEmail,
    breweryAddress: props.breweryAddress,
    breweryHours: props.breweryHours,
    breweryHistory: props.breweryHistory,
    breweryActive: props.breweryActive,
    userId: props.userNumber
})

React.useEffect(()=>{
    fetch(`http://localhost:8081/beersbybrewery/${props.breweryId}`, {headers: {'Authorization' : 'Bearer ' + token}} )
    .then(res => res.json())
    .then(data => setBeerArray(data.map(item => <SmallBeerCard beerId={item.beerId} beerImage={item.beerImg} brewery={item.breweryId} beerAbv={item.beerAbv} beerName={item.beerName} beerType={item.beerType} beerDesc={item.beerDescription} isActive={item.beerActive} breweryActive={props.status}/>)))
},[props.breweryId])

    function handleInputChange(event){
        event.preventDefault()

        setBreweryDetails({
            ...brewerydetails,
            [event.target.name] : event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.put(baseUrl + "/updatebrewery", brewerydetails, {headers: {'Authorization' : 'Bearer ' + token}})
        alert("Brewery updated successfully")
    }

    return(
        <div classname="brewerControlBoard">
            
        <div className="breweryUpdate">
            <h3>Brewery Status: {props.status ? 'Approved' : 'Pending'}</h3>
            <h6>{props.status ? 'Your brewery profile is active! You can update your information and add beers to your Beer List!' : 
            'Your brewery is being reviewed. Please allow up to 48 hours for approval. In the meantime, you may update your Brewery Info and prepare your beer offerings!'} </h6>
            <form>
                <label htmlFor="breweryName">Brewery Name:</label>
             <input
                            type="text"
                            id="breweryName"
                            name="breweryName"
                            class="form-control"
                            placeholder={props.breweryName}
                            v-model="brewery.breweryname"
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="breweryImg">Brewery Picture URL:</label>
                        <input
                            type="text"
                            id="breweryImg"
                            name="breweryImg"
                            class="form-control"
                            placeholder={props.breweryImg}
                            v-model="brewery.breweryImageUrl"
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="breweryWebsite">Brewery Website:</label>
                        <input
                            type="text"
                            id="breweryWebsite"
                            name="breweryWebsite"
                            class="form-control"
                            placeholder={props.breweryWebsite}
                            v-model="brewery.brewerywebsite"
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="breweryPhone">Phone Number:</label>
                        <input
                            type="text"
                            id="breweryPhone"
                            name="breweryPhone"
                            class="form-control"
                            placeholder={props.breweryPhone}
                            v-model="brewery.breweryphone"
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="breweryEmail">Contact Email:</label>
                        <input
                            type="text"
                            id="breweryEmail"
                            name="breweryEmail"
                            class="form-control"
                            placeholder={props.breweryEmail}
                            v-model="brewery.breweryemail"
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="breweryAddress">Street Address:</label>
                        <input
                            type="text"
                            id="breweryAddress"
                            name="breweryAddress"
                            class="form-control"
                            placeholder={props.breweryAddress}
                            v-model="brewery.breweryaddress"
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="breweryHours">Hours of Operation:</label>
                        <input
                            type="text"
                            id="breweryHours"
                            name="breweryHours"
                            class="form-control"
                            placeholder={props.breweryHours}
                            v-model="brewery.breweryhours"
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="breweryHistory">Say something about your brewery!</label>
                        <textarea
                            rows = "5"
                            id="breweryHistory"
                            name="breweryHistory"
                            class="form-control"
                            placeholder={props.breweryHistory}
                            v-model="brewery.brewerydesc"
                            onChange={handleInputChange}
                            required
                        />
        
                <div className='buttondiv'><button onClick={handleSubmit} className="submitbutton" type="submit">Update Changes</button></div>  
        </form>
    
        <AddBeerForm breweryId={props.breweryId} breweryActive={props.breweryActive}/>
        <h2 className='mybeers'>My Beer List </h2>
        {beerArray}
        </div>
        
        
        </div>
    )
}