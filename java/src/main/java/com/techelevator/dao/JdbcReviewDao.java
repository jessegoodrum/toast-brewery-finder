package com.techelevator.dao;

import com.techelevator.model.Review;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcReviewDao implements ReviewDao {
    private final JdbcTemplate jdbcTemplate;

    public JdbcReviewDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<Review> getReviewsByBeerId(int beerId) {
        List<Review> reviewsByBeer = new ArrayList<>();
        String sql = "SELECT " +
                "review_id, " +
                "beer_id, " +
                "review, " +
                "rating, " +
                "review_author " +
                "FROM review " +
                "WHERE beer_id = ?";

        SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, beerId);
        while (rs.next()) {
            Review review = mapRowToReview(rs);
            reviewsByBeer.add(review);
        }
        return reviewsByBeer;
    }

    @Override
    public void addReview(Review review) {
        String sql = "INSERT INTO review(beer_id, review, rating, review_author)" +
                "VALUES(?, ?, ?, ?)";
        jdbcTemplate.update(sql,
                review.getBeerId(),
                review.getReview(),
                review.getRating(),
                review.getReviewAuthor());
    }

    @Override
    public void deleteReview(int reviewId) {
        String sql = "DELETE FROM review WHERE review_id = ?";
        jdbcTemplate.update(sql, reviewId);
    }

    private Review mapRowToReview(SqlRowSet rs){
        Review review = new Review();
        review.setReviewId(rs.getInt("review_id"));
        review.setBeerId(rs.getInt("beer_id"));
        review.setReview(rs.getString("review"));
        review.setRating(rs.getInt("rating"));
        review.setReviewAuthor(rs.getString("review_author"));
        return review;
    }
}