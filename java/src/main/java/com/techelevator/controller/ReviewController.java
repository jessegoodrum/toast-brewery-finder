package com.techelevator.controller;

import com.techelevator.model.Review;
import com.techelevator.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @RequestMapping(value ="/reviews/{beerId}", method = RequestMethod.GET)
    public List<Review> getReviewsByBeerId(@PathVariable int beerId) {return reviewService.getReviewsByBeerId(beerId);}

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/addReview", method = RequestMethod.POST)
    public void addReview(@Valid @RequestBody Review review){
        reviewService.addReview(review);
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @RequestMapping(path = "/deleteReview/{reviewId}", method = RequestMethod.DELETE)
    public void deleteBrewery(@PathVariable int reviewId){reviewService.deleteReview(reviewId);}

}
