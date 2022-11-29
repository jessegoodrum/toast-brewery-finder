import BreweryUpdate from "../Brewery/BreweryUpdate"
import React from "react"
import {useStore} from 'react-redux'
import BreweryCreation from "../Brewery/BreweryCreation"
import UserDetails from "../Users/UserDetails"

export default function BrewerHome(props){

    const store = useStore()
    const token = store.getState().token.token
    const user = store.getState().user;
    const userId = store.getState().user.id;

    const [updateBeerProps, setUpdateBeerProps] = React.useState('')

    const [brewerySelected, setBrewerySelected] = React.useState(false)

    function toggleBrewery(){
        setBrewerySelected(!brewerySelected)
    }

    React.useEffect(()=>{ 
        fetch("http://localhost:8081/breweriesbyuser/" + userId, {headers: {'Authorization' : 'Bearer ' + token}} )
        .then(res => res.json())
        .then(data => setUpdateBeerProps(
            data.map((item) =>
            <BreweryUpdate breweryId={item.breweryId}
            breweryName={item.breweryName}
            breweryImg={item.breweryImg}
            breweryHours={item.breweryHours}
            breweryHistory={item.breweryHistory}
            breweryEmail={item.breweryEmail}
            breweryPhone={item.breweryPhone}
            breweryWebsite={item.breweryWebsite}
            breweryAddress={item.breweryAddress}
            userName = {user.username} 
            userAvatar = {user.avatar}
            status ={item.breweryActive}
            userNumber = {item.userId}/>
           )
            ))
    }, [])

    return(
        <div>
        <h1 className="welcome">Welcome Brewer {props.userName}! </h1>
        <div className="updateContainer">
        <UserDetails username={user.username} userpic={user.avatar} userId={userId} />
        <div className="UpdateBreweryContainer">
        {updateBeerProps} 
        {updateBeerProps=='' &&<BreweryCreation userNumber={userId}/>}
        </div>
        </div>
        </div>
        
        
    )
}