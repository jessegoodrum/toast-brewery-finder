package com.techelevator.controller;

import com.techelevator.model.*;
import com.techelevator.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import com.techelevator.model.*;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.List;

@RestController
@CrossOrigin
@PreAuthorize("isAuthenticated()")
public class BeersController {
    @Autowired
    private BeersService beersService;

    @ResponseStatus(HttpStatus.ACCEPTED)
    @RequestMapping(value = "/beers", method = RequestMethod.GET)
    public List<Beers> getAllBeers() {
        return beersService.getAllBeer();
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @RequestMapping(value = "/beersbybrewery/{id}", method = RequestMethod.GET)
    public List<Beers> getBeersByBreweryId(@PathVariable int id){
        return beersService.getBeersByBreweryId(id);
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @RequestMapping(value = "/beer/{id}", method = RequestMethod.GET)
    public Beers getBeerById(@PathVariable int id){
        return beersService.getBeerByID(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/addbeer", method = RequestMethod.POST)
    public void saveBeer(@Valid @RequestBody Beers beer){
        beersService.saveBeer(beer);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/updatebeer", method = RequestMethod.PUT)
    public void updateBeer(@Valid @RequestBody Beers beers){
        beersService.updateBeer(beers);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/deletebeer/{id}", method = RequestMethod.DELETE)
    public void deleteBeer(@PathVariable int id){beersService.deleteBeer(id);}

    @RequestMapping(value = "/beer/rating/{id}", method = RequestMethod.GET)
    public BigDecimal getBeerRating(@PathVariable int id){return beersService.getBeerRating(id);}
}
