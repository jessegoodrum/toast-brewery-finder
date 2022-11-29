import React from "react";
import BreweryDetails from "./BreweryDetails";
import { checkPropTypes } from "prop-types";
import {Switch, Route, Redirect, Link, useParams} from 'react-router-dom'
import { useStore } from "react-redux";


export default function BreweriesList(props) {
    const store = useStore()
    const[brewSelected, setBrewSelected] = React.useState(false)
    const authority = store.getState().user.authorities;
    
    let role = ''
    authority.map( (auth) => {
    role = auth.name
    });


    function toggle(){
        setBrewSelected(oldSelect => !oldSelect)
    }

  

    return(
        <section>
        {props.active ? <div>
    <div className="brewerycard">
    
            <img src={props.brewImage} className="cardImage" />
            <div className="card-details">
                <h1>{props.brewName} {role === 'ROLE_ADMIN' &&<span> (breweryID={props.breweryId})</span>}</h1>
                <h4 className="address">Address: {props.brewAddress}</h4> 
                <h4 className="hours">Hours: {props.brewHours}</h4>
                {/* <h4>Rating: {props.brewRating} </h4>  */}
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