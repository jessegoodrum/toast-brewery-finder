import React from 'react'
import BreweryList from '../Brewery/BreweryList'
import {useStore} from 'react-redux'
import SmallBreweryCard from '../Brewery/SmallBreweryCard'



export default function AdminHome(props){
    const {userName} = props


    const[brewArray, setBrewArray] = React.useState([])

    const store = useStore()
    const token = store.getState().token.token
    
    React.useEffect(()=>{
        fetch('http://localhost:8081/breweries', {headers: {'Authorization' : 'Bearer ' + token}} )
        .then(res => res.json())
        .then(data => setBrewArray(data.map(item => <SmallBreweryCard key={item.breweryId} breweryId={item.breweryId} phone={item.breweryPhone} history={item.breweryHistory} email={item.breweryEmail} website={item.breweryWebsite} address={item.breweryAddress} active={item.breweryActive} brewImage={item.breweryImg} brewName={item.breweryName} brewHours={item.breweryHours} brewAddress={item.breweryAddress}  ownerId={item.userId}/>)))
    },[])


    return(
        <div>
            <h1 className='welcome'>Welcome Admin {userName}</h1>
            <h4>List of breweries with "pending" status to approve: </h4>
            {brewArray}
            
        </div>
    )
}