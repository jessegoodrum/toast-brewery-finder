package com.techelevator.dao;





import com.techelevator.model.Brewery;

import java.util.List;

public interface BreweryDao {

    List<Brewery> getAllBreweries();

    void addNewBrewery(Brewery brewery);

    Brewery getBreweryById(int breweryId);

    void updateBrewery(Brewery brewery);

    void deleteBrewery(int breweryId);

    List<Brewery> getBreweriesByUserID(int userId);


}
