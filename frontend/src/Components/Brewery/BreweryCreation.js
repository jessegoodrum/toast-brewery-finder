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

class BreweryCreation extends Component{
   
    constructor(props){
        super(props);
        const headers = {headers: {'Authorization' : 'Bearer ' + props.token.token}}
        this.state = {
            headers: headers,
                breweryname: '',
                brewerywebsite:'',
                breweryphone: '',
                brewerydesc:'',
                breweryemail:'',
                breweryImageUrl:'',
                breweryaddress:'',
                breweryhours:'',
                breweryactive: false,
                userId: ''
       
        }
    }

    resetFormFields = () => {
         this.setState({
            breweryname :' ', 
            brewerywebsite : '',
            breweryphone: '',
            brewerydesc:'',
            breweryemail:'',
            breweryImageUrl:'',
            breweryaddress:'',
            breweryhours:'',
        });
  
    };

    handleSubmit = (event) => { 
        event.preventDefault();
        const breweryData = {breweryName: this.state.breweryname, 
        breweryWebsite: this.state.brewerywebsite,
        breweryPhone: this.state.breweryphone,
        breweryEmail: this.state.breweryemail,
        breweryHistory: this.state.brewerydesc,
        breweryAddress: this.state.breweryaddress,
        breweryHours: this.state.breweryhours,
        breweryImg: this.state.breweryImageUrl,
        breweryActive: this.state.breweryactive,
        userId: this.props.userNumber} //"userId" was being superceded
        
         axios.post(baseUrl + "/addbrewery", breweryData, this.state.headers)  
         
        alert("Brewery created successfully.")
        
        this.resetFormFields();
        } 
        
    
   

    handleInputChange = (event) => {
        event.preventDefault()
        
        this.setState(
            {[event.target.name] : event.target.value}
        ); 
    }

render(){ 
return(
    <form className="breweryCreation">
        <h4>We don't have your brewery info yet! Please fill out the form below:</h4>
             <input
                            type="text"
                            id="breweryname"
                            name="breweryname"
                            class="form-control"
                            placeholder="BreweryName"
                            v-model="brewery.breweryname"
                            value={this.state.breweryname}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryImageUrl"
                            name="breweryImageUrl"
                            class="form-control"
                            placeholder="Brewery Image URL"
                            v-model="brewery.breweryImageUrl"
                            value={this.state.breweryImageUrl}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="brewerywebsite"
                            name="brewerywebsite"
                            class="form-control"
                            placeholder="Brewery Website Address"
                            v-model="brewery.brewerywebsite"
                            value={this.state.brewerywebsite}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryphone"
                            name="breweryphone"
                            class="form-control"
                            placeholder="Contact Phone Number"
                            v-model="brewery.breweryphone"
                            value={this.state.breweryphone}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryemail"
                            name="breweryemail"
                            class="form-control"
                            placeholder="Contact Email"
                            v-model="brewery.breweryemail"
                            value={this.state.breweryemail}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryaddress"
                            name="breweryaddress"
                            class="form-control"
                            placeholder="Street Address"
                            v-model="brewery.breweryaddress"
                            value={this.state.breweryaddress}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryhours"
                            name="breweryhours"
                            class="form-control"
                            placeholder="Open Hours"
                            v-model="brewery.breweryhours"
                            value = {this.state.breweryhours}
                            onChange={this.handleInputChange}
                            required
                        />
                        <textarea
                            rows = "5"
                            id="brewerydesc"
                            name="brewerydesc"
                            class="form-control"
                            placeholder="Say something about your brand!"
                            v-model="brewery.brewerydesc"
                            value={this.state.brewerydesc}
                            onChange={this.handleInputChange}
                            required
                        />
        
                <button type="submit" onClick={this.handleSubmit}>Update Changes</button> 
                <button onClick={this.resetFormFields}>Reset</button>    
        </form>
)

}
}
export default connect(mapStateToProps)(BreweryCreation);