# Final Capstone

This project is a Brewery Finder application to find breweries and review their brews. Toast has three levels of users, first being a basic user or "beer-lover", second being the brewer or brewery, and the thrid is an admin account. Each type of user has functionality that is different of the other. As a basic user I can regiester or login, look through a list of breweries, visit that brewery's page and rate their brews. As a brewer I can add my brewery to the database, add my brews to my brewery, and view users reviews of my brews. As an admin, I have full control over editing/deleting breweries, brews, and reviews. I also can approve a brewery to show live on the site. 

This application uses Java 11 on the back end, and was built using InteliJ IDE. The back end utilizes Spring Boot to create RESTful API's in order to perofrm CRUD tasks with the database. 

For the front end, React.js was used to create a single page application that utilizes CSS for styling. The front end was developed in Visual Studio Code. 

The database utilizes a Postgres database server, and was developed using PG Admin. 


# To start application:

1. Run the .sh in the command line file from the ~/java/database folder. To set up a database in postgres.
2. Run jessesdatabasebackup2.sql from ~/java/database. To set the tables and columns up in that database. 
3. Run ToastTests.postman_collection.json from the database folder in postman to populate the database with data. (You can skip this if you would like to add you're own data.)
4. Open the ~/java folder in IntelliJ using Java 11. 
5. Run the backend from the main class. 
6 Open up ~/frontend with VSCode. 
7. From the terminal in VSCode do an npm install (might need to use -legacy-peer-deps due to older packages)
8. From the terminal run npm start and the program should start on port 3000. 
