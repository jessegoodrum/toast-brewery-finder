import React from 'react'

export default function ReviewCard(props) {

   
    //<h4>&#127866;&#127866;</h4>
    
    function mugCount() {
        if (props.rating==1){
            return <h4>&#127866;</h4>
        }else if (props.rating==2){
            return <h4>&#127866;&#127866;</h4>
        }else if (props.rating==3){
            return <h4>&#127866;&#127866;&#127866;</h4>
        }else if (props.rating==4){
            return <h4>&#127866;&#127866;&#127866;&#127866;</h4>
        }else if (props.rating==5){
            return <h4>&#127866;&#127866;&#127866;&#127866;&#127866;</h4>
    }
}
    
    return (
        <div className='review'>
            {props.role === "ROLE_ADMIN" && <h3 className='review-id'>Review ID: {props.reviewId}</h3>}
            
            <h5 className='review-rating'>{mugCount()}</h5>
            <p className='review-body' >"{props.review}"</p>
            <h6 className='review-author'>Reviewer: {props.author}</h6>
        </div>
    )
}