package com.techelevator.services;

import com.techelevator.dao.*;
import com.techelevator.model.*;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.List;

@Service
public class BeersService {
    private final RestTemplate restTemplate = new RestTemplate();
    private final JdbcTemplate jdbcTemplate = new JdbcTemplate();
    private final JdbcBeerDao beerDao;

    public BeersService(JdbcBeerDao beerDao) {
        this.beerDao = beerDao;
    }

    public List<Beers> getAllBeer(){
        return beerDao.getAllBeer();
    }

    public List<Beers> getBeersByBreweryId(int breweryId){
        return beerDao.getBeersByBreweryID(breweryId);
    }

    public Beers getBeerByID(int beerId){
        return beerDao.getBeerByID(beerId);
    };

    public void saveBeer(Beers beer){ beerDao.saveBeer(beer);}

    public void updateBeer(Beers beer){
        beerDao.updateBeer(beer);
    };

    public void deleteBeer(int beerId){
        beerDao.deleteBeer( beerId);
    };

    public BigDecimal getBeerRating(int beerId){return beerDao.getAverageRatingByBeerId(beerId);};

}
