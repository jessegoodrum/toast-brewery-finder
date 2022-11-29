import React, { useState } from "react";
import { baseUrl } from '../../Shared/baseUrl'
import { Component } from "react";
import axios from "axios";
import { useStore } from "react-redux";
import {connect} from 'react-redux';
import {createStore, Redux} from 'redux';


const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user,
    }
}

class AddBeerForm extends Component{
    //should not be able to add beer until brewery is built
//make addbeerForm button disabled if breweryID===null? 



    constructor(props){
        super(props);
        const headers = {headers: {'Authorization' : 'Bearer ' + props.token.token}}
        const barId = props.breweryId
        this.state = {
            headers: headers,
                beername: '',
                beerImageUrl:'',
                beerABV: '',
                beerdesc:'',
                beerActive: true,
                beerType:'Pilsner',
                breweryId: barId
       
        }
    }

    resetFormFields = () => {
        this.setState({
            beername: '',
            beerImageUrl:'',
            beerABV: '',
            beerdesc:'',
            beerType:'',
       });
 
   };


    handleSubmit = async (event) => { 
        event.preventDefault();
        const beerData = {beerName: this.state.beername, 
        breweryId: this.state.breweryId,
        beerImg: this.state.beerImageUrl,
        beerAbv: this.state.beerABV,
        beerType: this.state.beerType,
        beerDescription: this.state.beerdesc,
        beerActive:'false',
        }
        console.log(this.state.breweryId)
           await axios.post(baseUrl + "/addbeer", beerData, this.state.headers)
            //can we make this conditional based on response?
            alert("Beer added successfully.")
            this.resetFormFields();
     
    }
   

    handleBeerChange = (event) => {
        event.preventDefault()
        
        this.setState(
            {[event.target.name] : event.target.value}
        ); 
    }

render(){ 
return(
    <form>
        <h3 className="addbrew">Add a new brew!</h3>
             <input
                            type="text"
                            id="beername"
                            name="beername"
                            class="form-control"
                            placeholder="New Beer Name"
                            v-model="beer.beername"
                            value={this.state.beername}
                            onChange={this.handleBeerChange}
                            required
                        />
                        <input
                            type="text"
                            id="beerImageUrl"
                            name="beerImageUrl"
                            class="form-control"
                            placeholder="Beer Picture URL"
                            v-model="beer.beerImageUrl"
                            value={this.state.beerImageUrl}
                            onChange={this.handleBeerChange}
                            required
                        />
                        <input
                            type="text"
                            id="beerABV"
                            name="beerABV"
                            class="form-control"
                            placeholder="Alcohol By Volume (max 9.9)"
                            v-model="beer.beerABV"
                            value={this.state.beerABV}
                            onChange={this.handleBeerChange}
                            required
                        />
                        <input
                            type="textbox"
                            id="beerdesc"
                            name="beerdesc"
                            class="form-control"
                            placeholder="Description"
                            v-model="beer.beerdesc"
                            value={this.state.beerdesc}
                            onChange={this.handleBeerChange}
                            required
                        />
                       <div>
        Beer Type:    
        <select onChange={this.handleBeerChange} id="beerType" name="beerType">
                        <option value="Ale">Ale</option>
                        <option value="Brown">Brown</option>
                        <option value="IPA">IPA</option>
                        <option value="Lager">Lager</option>
                        <option value="Lite Beer">Lite</option>
                        <option value="Non-Alcoholic">Non-Alcoholic</option>
                        <option value="Pilsner">Pilsner</option>
                        <option value="Porter">Porter</option>
                        <option value="Stout">Stout</option>
                        
                    </select>
                    </div>
                <div className="buttondiv">
                <button type="submit" onClick={this.handleSubmit} >Update Changes</button>
                <button onClick={this.resetFormFields}>Reset</button>   
                </div>     
        </form>
)

}
}
export default connect(mapStateToProps)(AddBeerForm);