import React, {useState, useEffect} from 'react';
import BreweryData from "./BreweryData";
import { baseUrl } from '../../Shared/baseUrl';
import { useStore } from 'react-redux';
import {Link} from 'react-router-dom';

export default function Query(props) {
  // states to attribute
  const token = store.getState().token.token
  const [queryData, setQueryData] = useState({BreweryData});
  console.log(queryData);

  const [results, setResults] =  useState([]);

  //Use Effect
useEffect(() => {
  fetch(`http://localhost:8081/breweriesbyuser/${props.userId}`, {headers: {'Authorization' : 'Bearer ' + token}})
  .then(res => {res.json()})
  .then(data => setQueryData(data))
}, [results])
 
  // functions

  //input field value change
  const handleChange = (e) => {
    e.preventDefault();
    const {} = e.target
    setQueryData(prevQueryData => {
      return {
        ...prevQueryData,
        [queryData]:value
      }
  })
}

//Handle the submit of the query

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formData);
} 
  return (
          <form onSubmit={handleSubmit}>
            <pre>{JSON.stringify(queryData, null, 2)}</pre>
            <input 
              className="query" placeholder="Lets search for a brewery" type="text"
              value={queryData} 
              onChange={handleChange}
            />
            <button type='submit' onClick={() =>setResults(prevQueryData => prevQueryData + 1)}>
              Submit
            </button>
          </form>
  )
}
