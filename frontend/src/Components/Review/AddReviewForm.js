import axios from 'axios';
import React from 'react'
import { baseUrl } from '../../Shared/baseUrl'
import {useStore} from "react-redux"

export default function AddReviewForm(props) {

    const store = useStore()
    const username = store.getState().user.username

    const [formData, setFormData] = React.useState({
        reviewAuthor: "placeHolderAuthor",
        review: "",
        beerId: props.beerId,
        rating: 1
    });
    

    const emptyData = {
        reviewAuthor: "placeHolderAuthor",
        review: "",
        beerId: props.beerId,
        rating: 0
    }

    const ratingValue = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5
    }
    

    function handleSubmit(event) {
        event.preventDefault()
        const reviewData = {
            review: formData.review,
            beerId: formData.beerId,
            reviewAuthor: username,
            rating: formData.rating
        }
        axios.post(baseUrl + "/addReview", reviewData)
        alert("Review Submitted!")
        setFormData(emptyData)
    }

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: name === 'rating' ? parseInt(value) : value
        }))
    console.log(formData)
    
    }


    return (
        <form className='review-form'>
            <div className='review-inputs'>
                <textarea 
                    type='text' 
                    placeholder='Leave your review here!'
                    id='review'
                    name='review'
                    className='review-text'
                    onChange={handleChange}
                    required={true}
                    value={formData.review}
                ></textarea>

                <select value={formData.rating} onChange={handleChange} name='rating' id='rating' required={true} placeholder='Your rating' className='review-rating'>
                    <option id='rating' value={ratingValue.one}>&#127866;</option>
                    <option id='rating' value={ratingValue.two}>&#127866;&#127866;</option>
                    <option id='rating' value={ratingValue.three}>&#127866;&#127866;&#127866;</option>
                    <option id='rating' value={ratingValue.four}>&#127866;&#127866;&#127866;&#127866;</option>
                    <option id='rating' value={ratingValue.five}>&#127866;&#127866;&#127866;&#127866;&#127866;</option>
                </select>
            </div>

            <button onClick={handleSubmit} disabled={formData.review==""}>Submit Review</button>
        </form>
    )
}