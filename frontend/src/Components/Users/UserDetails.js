import React from "react";
import axios from "axios";
import ReviewCard from "../Users/ReviewCard";
import { baseUrl } from "../../Shared/baseUrl";
import { useStore } from "react-redux";

export default function UserDetails(props) {
    const store = useStore()
const token = store.getState().token.token

const[userdetails, setUserDetails] =React.useState({
    userId: props.userId,
    username: props.username,
    avatar: props.userpic
})

const authority = store.getState().user.authorities;
    let role = ''
authority.map( (auth) => {
    role = auth.name
});
    function handleDelete(event){
        event.preventDefault()
        //would love a confirmation window to pop up here. "Are you sure? cannot be undone!"
        axios.delete("http://localhost:8081/deleteuser/" + props.userId)
        alert("Profile deleted successfully. You will now be logged out.")
        window.location.href = '/login'    
}



function handleAvatarChange(event){
    //event.preventDefault()
    setUserDetails(prevuserdetails => ({
        ...prevuserdetails,
        avatar : event.target.value
}))
    axios({
        method: "put",
        url: "http://localhost:8081/updateavatar/" + userdetails.userId,
        data: event.target.value,
        headers: {'Authorization' : 'Bearer ' + token, 'Content-Type': 'text/plain'}
    })
    
    console.log("Avatar changed to: "+event.target.value)
    alert("Avatar picture updated, change will be permanently reflected on next login.")
      
}



return (
    <div className="userUpdate">
        <h3>User Profile: {props.username} {role === 'ROLE_ADMIN' &&<span>UserId: {props.userId}</span>}</h3>
        <form>

    <div className="avatarContainer">
        <div className="userUpdatePic">
            <h3>Current Avatar</h3> 
            <img src={userdetails.avatar}/>
        </div>
        <div>
        <h3 className="changecolortext">Change Avatar color</h3>   
        
        <select onChange={handleAvatarChange} id="avatar" name="avatar" className="avatarSelect" >
                        <option default>Choose New</option>
                        <option value="./Images/beeravatars/pinkavatar.png">Pink</option>
                        <option value="./Images/beeravatars/redavatar.png">Red</option>
                        <option value="./Images/beeravatars/orangeavatar.png">Orange</option>
                        <option value="./Images/beeravatars/yellowavatar.png">Yellow</option>
                        <option value="./Images/beeravatars/greenavatar.png">Green</option>
                        <option value="./Images/beeravatars/blueavatar.png">Blue</option>
                        <option value="./Images/beeravatars/purpleavatar.png">Purple</option>
                        <option value="./Images/beeravatars/blackavatar.png">Black</option>
                        <option value="./Images/beeravatars/whiteavatar.png">White</option>
                    </select>
                    </div> 
                    </div>
       
        {/* Change Password: 
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
                <button type="submit">Update Changes</button> */}
                <button onClick={handleDelete} >DELETE ACCOUNT</button>  
        </form>
        {/* <h4>My Reviews (get # of reviews, "badges" for 1,5,10 etc)</h4> */}
    </div>

)

}