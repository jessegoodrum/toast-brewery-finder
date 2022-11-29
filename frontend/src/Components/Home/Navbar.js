import { checkPropTypes } from "prop-types";
import React from "react";

export default function Navbar(props) {
    //TODO: change circle to user's chosen color? favorite beer? userpic?
    //admin/brewer tools should change or dissappear depending on login level
    //remove "home" link in top left corner, make clicking logo return to login screen?

return(
    
        <div className="navbar">
            
            <div className="branding">
            <img src="./Images/toastnobkgd.png" className="toastLogo" alt="BeerToaster logo"></img>
                <h1>TOAST!</h1>
            </div>
            </div>
            
    
)

}