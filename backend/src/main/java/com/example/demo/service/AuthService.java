package com.example.demo.service;

import com.example.demo.dto.request.LoginRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.LoginResponse;
import com.example.demo.model.User;

import java.util.List;

public interface AuthService {

    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);

    String createAdmin();

    List<User> getAllUsers();

    User getUserById(Long id);

    User updateUser(Long id, User user);

    void deleteUser(Long id);

    User getUserByEmail(String email);

    User updateUserByEmail(User user);
}
