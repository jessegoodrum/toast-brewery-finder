package com.techelevator.dao;

import com.techelevator.model.User;

import java.util.List;

public interface UserDao {

    List<User> findAll();

    User getUserById(Long userId);

    User findByUsername(String username);

    int findIdByUsername(String username);

    boolean create(String username, String password, String role, String avatar);

    void updateUserAvatar(Long id, String avatar);

    void updateUserPassword(Long userId, String password);

    void deleteUser(Long userId);
}
