package com.techelevator.services;


import com.techelevator.dao.*;
import com.techelevator.model.Review;
import com.techelevator.dao.JdbcReviewDao;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ReviewService {
    private final RestTemplate restTemplate = new RestTemplate();
    private final JdbcTemplate jdbcTemplate = new JdbcTemplate();
    private final JdbcReviewDao reviewDao;

    public ReviewService(JdbcReviewDao reviewDao) {
        this.reviewDao = reviewDao;
    }

    public List<Review> getReviewsByBeerId(int beerId){
        return reviewDao.getReviewsByBeerId(beerId);
    }

    public void addReview(Review review){
        reviewDao.addReview(review);
    }

    public void deleteReview(int reviewId) {reviewDao.deleteReview(reviewId);}
}
