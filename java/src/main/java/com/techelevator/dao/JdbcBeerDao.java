package com.techelevator.dao;

import com.techelevator.model.*;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;
@Component
public class JdbcBeerDao implements BeerDao {

    private final JdbcTemplate jdbcTemplate;

    public JdbcBeerDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    //getting all beers from the database
    @Override
    public List<Beers> getAllBeer() {
        List<Beers> beers = new ArrayList<>();
        String sql =
                "SELECT beer_id, brewery_id, beer_img, beer_name, beer_abv, beer_type, beer_description, beer_active FROM beers ORDER BY beer_id;";
        SqlRowSet rs = jdbcTemplate.queryForRowSet(sql);
        while (rs.next()) {
            Beers b = mapRowToBeers(rs);
            beers.add(b);
        }
        return beers;
    }

    @Override
       public void saveBeer (Beers newBeer){
        String sql = "INSERT INTO beers (beer_img, brewery_id, beer_name, beer_abv, beer_type, beer_description, beer_active) " +
                "VALUES (?,?,?,?,?,?,?)";
        jdbcTemplate.update(sql,
                newBeer.getBeerImg(),
                newBeer.getBreweryId(),
                newBeer.getBeerName(),
                newBeer.getBeerAbv(),
                newBeer.getBeerType(),
                newBeer.getBeerDescription(),
                newBeer.isBeerActive());
        }

    @Override
       public void deleteBeer ( int beerId){
            String sql = "DELETE FROM beers where beer_id = ?";
            jdbcTemplate.update(sql, beerId);
        }

    @Override
       public Beers getBeerByID ( int beerId ){
           String sql = "SELECT beer_id, brewery_id, beer_img, beer_name, beer_abv, beer_type, beer_description,beer_active, FROM beers WHERE beer_id = ?;";
            Beers beer = new Beers();
            SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, beerId);
            while (rs.next()) {
                beer = mapRowToBeers(rs);
            }
            return beer;
        }

    @Override
       public List<Beers> getBeersByBreweryID(int breweryId) {
            List <Beers> beersByBrewery = new ArrayList<>();
                String sql = "SELECT  " +
                    "beer_id, " +
                    "brewery_id, " +
                    "beer_img, " +
                    "beer_name, " +
                    "beer_abv, " +
                    "beer_type, " +
                    "beer_description," +
                    "beer_active "+
                    "FROM beers " +
                    "WHERE brewery_id = ?;";

            SqlRowSet results = jdbcTemplate.queryForRowSet(sql, breweryId);
                while(results.next()){
                    Beers beer = mapRowToBeers(results);
                    beersByBrewery.add(beer);
                }
            return beersByBrewery;
        }

    @Override
       public void updateBeer (Beers beer) {
            String sql = "UPDATE beers " +
                         "SET brewery_id = ?, " +
                         "beer_img = ?, " +
                         "beer_name = ?, " +
                         "beer_abv = ?, " +
                         "beer_type = ?, " +
                         "beer_description = ?, "+
                         "beer_active = ? " +
                         "WHERE beer_id = ?;";
            jdbcTemplate.update(sql, beer.getBreweryId(), beer.getBeerImg(), beer.getBeerName(), beer.getBeerAbv(),
                                beer.getBeerType(), beer.getBeerDescription(), beer.isBeerActive(), beer.getBeerId());
        }

    @Override
    public BigDecimal getAverageRatingByBeerId(int beerId) {
        String sql = "SELECT avg(rating) FROM review " +
                "WHERE beer_id = ?;";
        BigDecimal rating = BigDecimal.valueOf(0);
        if(jdbcTemplate.queryForObject(sql, BigDecimal.class, beerId) != null) {
            rating = jdbcTemplate.queryForObject(sql, BigDecimal.class, beerId).setScale(1, RoundingMode.CEILING);
        }
        return rating;
    }


    private Beers mapRowToBeers(SqlRowSet rs) {
        Beers beers = new Beers();
        beers.setBeerId(rs.getInt("beer_id"));
        beers.setBreweryId(rs.getInt("brewery_id"));
        beers.setBeerImg(rs.getString( "beer_img"));
        beers.setBeerName(rs.getString( "beer_name"));
        beers.setBeerAbv(rs.getDouble("beer_abv"));
        beers.setBeerType(rs.getString("beer_type"));
        beers.setBeerDescription(rs.getString("beer_description"));
        beers.setBeerActive(rs.getBoolean("beer_active"));
        return beers;
    }
}

//    @Override
//    public Beers getBeerByName(String beerName) {
//        String sql =
//                "select  " +
//                        "set beer_id = ?, " +
//                        "brewery_id = ?, " +
//                        "beer_img = ?, " +
//                        "beerName = ?, " +
//                        "beer_abv = ?, " +
//                        "beerType = ?, " +
//                        "beerDescription = ? " +
//                        "from beers " +
//                        "where id = ?";
//        Beers beer = new Beers();
//        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, beerName);
//        while (results.next()) {
//            beer = mapRowToBeer(results);
//
//        }
//








