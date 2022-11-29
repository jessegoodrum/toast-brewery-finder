package com.techelevator.model;

public class Brewery {
    //properties/fields
    private int breweryId;

    private String breweryName;
    private String breweryImg;
    private String breweryHours;
    private String breweryHistory;
    private String breweryEmail;
    private int beerId;
    private int userId;
    private String breweryPhone;
    private String breweryWebsite;
    private boolean breweryActive;
    private String breweryAddress;

    //constructor


    public Brewery() {
    }

    public Brewery(int breweryId, String breweryName, String breweryImg, String breweryHours, String breweryHistory, String breweryEmail, int beerId, int userId, String breweryPhone, String breweryWebsite, boolean breweryActive, String breweryAddress) {
        this.breweryId = breweryId;
        this.breweryName = breweryName;
        this.breweryImg = breweryImg;
        this.breweryHours = breweryHours;
        this.breweryHistory = breweryHistory;
        this.breweryEmail = breweryEmail;
        this.beerId = beerId;
        this.userId = userId;
        this.breweryPhone = breweryPhone;
        this.breweryWebsite = breweryWebsite;
        this.breweryActive = breweryActive;
        this.breweryAddress = breweryAddress;
    }

//methods

    @Override
    public String toString() {
        return "Brewery{" +
                "breweryId=" + breweryId +
                ", breweryName='" + breweryName + '\'' +
                ", breweryImg='" + breweryImg + '\'' +
                ", breweryHours='" + breweryHours + '\'' +
                ", breweryHistory='" + breweryHistory + '\'' +
                ", breweryEmail='" + breweryEmail + '\'' +
                ", beerId=" + beerId +
                ", userId =" + userId +
                ", breweryPhone='" + breweryPhone + '\'' +
                ", breweryWebsite='" + breweryWebsite + '\'' +
                ", breweryActive=" + breweryActive +
                ", breweryAddress='" + breweryAddress + '\'' +
                '}';
    }


    //getters

    public int getBreweryId() {
        return breweryId;
    }

    public String getBreweryName() {
        return breweryName;
    }

    public String getBreweryImg() {
        return breweryImg;
    }

    public String getBreweryHours() {
        return breweryHours;
    }

    public String getBreweryHistory() {
        return breweryHistory;
    }

    public String getBreweryEmail() {
        return breweryEmail;
    }

    public String getBreweryPhone() {
        return breweryPhone;
    }

    public String getBreweryWebsite() {
        return breweryWebsite;
    }

    public boolean isBreweryActive() {
        return breweryActive;
    }

    public String getBreweryAddress() {
        return breweryAddress;
    }

    public int getBeerId() {
        return beerId;
    }

    public int getUserId() {
        return userId;
    }

    //setter


    public void setBreweryId(int breweryId) {
        this.breweryId = breweryId;
    }

    public void setBreweryName(String breweryName) {
        this.breweryName = breweryName;
    }

    public void setBreweryImg(String breweryImg) {
        this.breweryImg = breweryImg;
    }

    public void setBreweryHours(String breweryHours) {
        this.breweryHours = breweryHours;
    }

    public void setBreweryHistory(String breweryHistory) {
        this.breweryHistory = breweryHistory;
    }

    public void setBreweryEmail(String breweryEmail) {
        this.breweryEmail = breweryEmail;
    }

    public void setBreweryPhone(String breweryPhone) {
        this.breweryPhone = breweryPhone;
    }

    public void setBreweryWebsite(String breweryWebsite) {
        this.breweryWebsite = breweryWebsite;
    }

    public void setBreweryActive(boolean breweryActive) {
        this.breweryActive = breweryActive;
    }

    public void setBreweryAddress(String breweryAddress) {
        this.breweryAddress = breweryAddress;
    }

    public void setBeerId(int beerId) {
        this.beerId = beerId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
