import React from 'react'
import BreweryCard from './BreweryCard'
import {useStore} from 'react-redux'

function BreweryList(props){
    const[brewArray, setBrewArray] = React.useState([])

    const store = useStore()
    const token = store.getState().token.token
    
    React.useEffect(()=>{
        fetch('http://localhost:8081/breweries', {headers: {'Authorization' : 'Bearer ' + token}} )
        .then(res => res.json())
        .then(data => setBrewArray(data.map(item => <BreweryCard key={item.breweryId} breweryId={item.breweryId} phone={item.breweryPhone} history={item.breweryHistory} email={item.breweryEmail} website={item.breweryWebsite} address={item.breweryAddress} active={item.breweryActive} brewImage={item.breweryImg} brewName={item.breweryName} brewHours={item.breweryHours} brewAddress={item.breweryAddress}  />)))
    },[])

    return(
        <div className='breweryList'>
            {token != null ? brewArray : <h1 style={{marginLeft: "20rem"}}>You must be logged in to view the Brewery List page</h1>}
        </div>
    )
}

export default BreweryList