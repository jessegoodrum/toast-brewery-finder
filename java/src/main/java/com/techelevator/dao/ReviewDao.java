package com.techelevator.dao;

import com.techelevator.model.Review;


import java.util.List;

public interface ReviewDao {

    List<Review> getReviewsByBeerId(int beerId);

    void addReview(Review review);

    void deleteReview(int review_id);

}
