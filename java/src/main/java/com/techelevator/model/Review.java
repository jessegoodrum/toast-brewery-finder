package com.techelevator.model;

public class Review {

    //properties/fields

    private int reviewId;
    private int beerId;
    private String review;
    private int rating;
    private int userId;
    private String reviewAuthor;

    //constructors

    public Review() {

    }

    public Review(int reviewId, int beerId, String review, int rating, String reviewAuthor) {
        this.reviewId = reviewId;
        this.beerId = beerId;
        this.review = review;
        this.rating = rating;
        this.reviewAuthor = reviewAuthor;
    }

    //methods

    @Override
    public String toString() {
        return "Review{" +
                "reviewId=" + reviewId +
                ", beerId=" + beerId +
                ", review='" + review + '\'' +
                ", rating=" + rating +
                ", reviewAuthor=" + reviewAuthor + '\'' +
                '}';
    }


    //getters

    public int getReviewId() {
        return reviewId;
    }

    public int getBeerId() {
        return beerId;
    }

    public String getReview() {
        return review;
    }

    public int getRating() {
        return rating;
    }

    public String getReviewAuthor() {
        return reviewAuthor;
    }

    //setters

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }

    public void setBeerId(int beerId) {
        this.beerId = beerId;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public void setReviewAuthor(String reviewAuthor) {
        this.reviewAuthor = reviewAuthor;
    }
}
