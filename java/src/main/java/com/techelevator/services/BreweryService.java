package com.techelevator.services;

import com.techelevator.dao.JdbcBreweryDao;

import com.techelevator.model.Brewery;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class BreweryService {
    private final RestTemplate restTemplate = new RestTemplate();
    private final JdbcTemplate jdbcTemplate = new JdbcTemplate();
    private final JdbcBreweryDao breweryDao;

    public BreweryService(JdbcBreweryDao breweryDao){ this.breweryDao = breweryDao;}

    public List <Brewery> getAllBreweries(){return breweryDao.getAllBreweries();}

    public List <Brewery> getBreweriesByUserId(int userId){
        return breweryDao.getBreweriesByUserID(userId);
    }

    public Brewery getBreweryByBreweryId(int breweryId){return breweryDao.getBreweryById(breweryId);}

    public void createBrewery(Brewery brewery) {
        breweryDao.addNewBrewery(brewery);
    }

    public void updateBrewery(Brewery brewery){
        breweryDao.updateBrewery(brewery);
    }

    public void deleteBrewery(int breweryId){
        breweryDao.deleteBrewery(breweryId);
    }
}
