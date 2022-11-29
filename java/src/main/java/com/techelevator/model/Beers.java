package com.techelevator.model;

public class Beers {
    //properties / fields
    private int beerId;
    private int breweryId;
    private String beerImg;
    private String beerName;
    private double beerAbv;
    private String beerType;
    private String beerDescription;
    private boolean beerActive;

    //constructor


    public Beers() {}

    public Beers(int beerId, int breweryId, String beerImg, String beerName, double beerAbv, String beerType, String beerDescription, boolean beerActive) {
        this.beerId = beerId;
        this.breweryId = breweryId;
        this.beerImg = beerImg;
        this.beerName = beerName;
        this.beerAbv = beerAbv;
        this.beerType = beerType;
        this.beerDescription = beerDescription;
        this.beerActive = beerActive;
    }

//getters

    public int getBeerId() {
        return beerId;
    }

    public int getBreweryId() {
        return breweryId;
    }

    public String getBeerImg() {
        return beerImg;
    }

    public String getBeerName() {
        return beerName;
    }

    public double getBeerAbv() {
        return beerAbv;
    }

    public String getBeerType() {
        return beerType;
    }

    public String getBeerDescription() {
        return beerDescription;
    }

    public boolean isBeerActive() {
        return beerActive;
    }


    //setters


    public void setBeerId(int beerId) {
        this.beerId = beerId;
    }

    public void setBreweryId(int breweryId) {
        this.breweryId = breweryId;
    }

    public void setBeerImg(String beerImg) {
        this.beerImg = beerImg;
    }

    public void setBeerName(String beerName) {
        this.beerName = beerName;
    }

    public void setBeerAbv(double beerAbv) {
        this.beerAbv = beerAbv;
    }

    public void setBeerType(String beerType) {
        this.beerType = beerType;
    }

    public void setBeerDescription(String beerDescription) {
        this.beerDescription = beerDescription;
    }

    public void setBeerActive(boolean beerActive) {
        this.beerActive = beerActive;
    }

}
