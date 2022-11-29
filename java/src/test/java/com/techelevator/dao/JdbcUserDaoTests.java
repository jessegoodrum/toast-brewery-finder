package com.techelevator.dao;

import com.techelevator.model.User;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

public class JdbcUserDaoTests extends FinalCapstoneDaoTests {

    private JdbcUserDao sut;

    @Before
    public void setup() {
        DataSource dataSource = this.getDataSource();
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        sut = new JdbcUserDao(jdbcTemplate);
    }

    @Test
    public void createNewUser() {
        boolean userCreated = sut.create("TEST_USER","test_password","user", "blackavatar.png");
        Assert.assertTrue(userCreated);
        User user = sut.findByUsername("TEST_USER");
        Assert.assertEquals("TEST_USER", user.getUsername());
    }

//   @Test
//   public void driverPresent(){
//    try{
//       Class.forName("org.postgresql.JDBC");
//       System.out.println("The driver was successfully loaded.");
//    }
//    catch (ClassNotFoundException e){
//       System.out.println("The driver class was not found in the program files at runtime.");
//    e.printStackTrace();
//    System.exit(1);
//    }
//
//  }

}
