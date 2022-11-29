package com.techelevator.controller;


import com.techelevator.model.Brewery;
import com.techelevator.services.BreweryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
@PreAuthorize("isAuthenticated()")
public class BreweryController {
    @Autowired
    private BreweryService breweryService;

    @RequestMapping(value = "/breweries", method = RequestMethod.GET)
    public List<Brewery> getAllBreweries(){
        return breweryService.getAllBreweries();
    }

    @RequestMapping(value = "/breweries/{id}", method = RequestMethod.GET)
    public Brewery getBreweryByBreweryId(@PathVariable int id){return breweryService.getBreweryByBreweryId(id);}

    @RequestMapping(value = "/breweriesbyuser/{id}", method = RequestMethod.GET)
    public List<Brewery> getBreweriesByUserId(@PathVariable int id){ return breweryService.getBreweriesByUserId(id);}

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/addbrewery", method = RequestMethod.POST)
    public void addBrewery(@Valid @RequestBody Brewery brewery){
        breweryService.createBrewery(brewery);
    }

    @RequestMapping(path = "/updatebrewery", method = RequestMethod.PUT)
    public void updateBrewery(@Valid @RequestBody Brewery brewery){
        breweryService.updateBrewery(brewery);
    }

    @RequestMapping(path = "/deletebrewery/{id}", method = RequestMethod.DELETE)
    public void deleteBrewery(@PathVariable int id){breweryService.deleteBrewery(id);}

}
