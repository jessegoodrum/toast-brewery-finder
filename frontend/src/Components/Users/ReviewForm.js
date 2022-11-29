import React, { useState } from "react";


export default function ReviewForm(props) {

    
//**not being used. see "AddReviewForm" */

// handleInputChange = (event) => {
//     event.preventDefault()
//     this.setState({
//         [event.target.name]: event.target.value
//     })
// }

return(
    <div className="reviewForm">

         <input className="reviewEntry"
                    type="textbox"
                    id="reviewbody"
                    name="reviewbody"
                    class="form-control"
                    placeholder="Tell people how you enjoyed this brew!"
                    v-model="review.reviewbody"
                    //onChange={this.handleInputChange}
                    required
                />
                <form>
                    "How would you rate this beer out of 5?"  
                    <select id="beerRating" name="beerRating">
                        
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    
                    </select>
                </form>
                    
                <button className="reviewButton" type="submit" >Submit Review</button>
    </div>
)

}