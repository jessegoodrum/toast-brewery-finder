import React from "react";
import BreweryDetails from "./BreweryDetails";
import { checkPropTypes } from "prop-types";
import {Switch, Route, Redirect, Link, useParams} from 'react-router-dom'
import axios from "axios";
import { baseUrl } from "../../Shared/baseUrl";
import { useStore } from "react-redux";


export default function BreweriesList(props) {
    const[isActive, setIsActive] = React.useState(props.active)
    const[brewSelected, setBrewSelected] = React.useState(false)
    const store = useStore()
    const token = store.getState().token.token
    const[brewerydetails, setBreweryDetails] =React.useState({
        breweryId: props.breweryId,
        breweryName: props.brewName,
        breweryImg: props.brewImage,
        breweryWebsite: props.website,
        breweryPhone: props.phone,
        breweryEmail: props.email,
        breweryAddress: props.brewAddress,
        breweryHours: props.brewHours,
        breweryHistory: props.history,
        breweryActive: !isActive,
        userId: props.ownerId
    })
    
    function toggle(){
        setBrewSelected(oldSelect => !oldSelect)
    }
    function toggleActive(event){
        setIsActive(oldActive => !oldActive)
        event.preventDefault();
        handleSubmit(event)
        
    }
    function handleSubmit(event){
        event.preventDefault()
        axios.put(baseUrl + "/updatebrewery", brewerydetails, {headers: {'Authorization' : 'Bearer ' + token}})
        alert("Brewery updated successfully")
    }

    return(
        <section>
        {!props.active ? <div>
    <div className="brewerycard">
    
            <img src={props.brewImage} className="cardImage" />
            <div className="card-details">
                <h1>{props.brewName}</h1>
                <h4 className="address">Location: {props.brewAddress}</h4> 
                <h4 className="Owner">Owner userId= {props.ownerId}</h4>
                <h4>breweryID= {props.breweryId}</h4> 
                <div className="accordion">
                <div className={brewSelected ? 'info show' : 'info'}>
                        <div>Phone: {props.phone}</div>
                        <div>Email: {props.email}</div>
                        <div>Website: {props.website}</div>
                        <div>{props.history}</div>
                        <Link to={`/BreweryDetails/${props.breweryId}`} className="breweryLink" >Brewery Details & Brew List</Link>
                        </div>
                    <div className="title" onClick={toggle}>
                        <h6>{brewSelected ? '^ See less... ^' : 'v See more... v'}</h6>
                        
                    </div>
                    
                    <button className="submitbutton" type="submit" onClick={toggleActive}>Activate brewery</button>
                </div> 
            </div>
            <Switch>
                    <Route path={'/:'}  component={() => <BreweryDetails 
                        brewId = {props.brewId}
                        image = {props.brewImage} 
                        address = {props.brewName}
                        name = {props.brewName}
                        hours = {props.brewHours}
                        rating = {props.brewRating}
                        phone = {props.phone}
                        email = {props.email}
                        website = {props.website}
                        history = {props.history}
                        />}/>
                    
                </Switch>
           </div>
           </div>:"" }
            </section>
)
//replace the "Link to" information on line 35 with just {"/BreweryDetails"} to remove the janky useParams stuff
}