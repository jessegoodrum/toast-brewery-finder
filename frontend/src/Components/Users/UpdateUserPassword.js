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

class UpdateUserPassword extends Component{

    constructor(props){
        super(props);
        const username = props.user.username
        const headers = {headers: {'Authorization' : 'Bearer ' + props.token.token}}
        this.state = {
            headers: headers,
            username: username,
            password: '',
            confirmPassword: '',
        }
    }

    render(){
        return(
        <form>
            Change Username:
        <input
                    type="text"
                    id="username"
                    name="username"
                    class="form-control"
                    placeholder={this.state.username}
                    v-model="user.username"
                    //onChange={this.handleInputChange}
                    
                />
        Change Password: 
        <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="user.password"
                    //onChange={this.handleInputChange}
                    
                />
                <input
                    type="password"
                    id="password-confirm"
                    name="confirmPassword"
                    class="form-control"
                    placeholder="Confirm Password"
                    v-model="user.password"
                    //onChange={this.handleInputChange}
                    
                />   
                <button type="submit">Update Changes</button> 
                </form>    
        )
    }

}

export default connect(mapStateToProps)(UpdateUserPassword);

