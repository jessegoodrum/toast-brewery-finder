package com.techelevator.dao;


import com.techelevator.model.*;

import java.math.BigDecimal;
import java.util.List;

public interface BeerDao {

    List<Beers> getAllBeer();

    void saveBeer(Beers newBeer);

    void deleteBeer(int beerId);

    Beers getBeerByID(int beerId);

    BigDecimal getAverageRatingByBeerId(int beerId);

    List <Beers> getBeersByBreweryID(int breweryId);

    void updateBeer(Beers beer);

}
