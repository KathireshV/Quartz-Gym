package com.example.demo.controller;

import static org.springframework.http.HttpStatus.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.request.LoginRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.model.User;
import com.example.demo.service.AuthService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Endpoints for user authentication and management")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    @Operation(summary = "Register a new user", description = "Allows users to register by providing necessary registration details.")
    public ResponseEntity<?> register(@Parameter(description = "Registration details of the user") @RequestBody RegisterRequest registerRequest) {
        return new ResponseEntity<>(authService.register(registerRequest), OK);
    }

    @PostMapping("/login")
    @Operation(summary = "Authenticate user", description = "Allows users to authenticate by providing valid login credentials.")
    public ResponseEntity<?> login(@Parameter(description = "Login credentials of the user") @RequestBody LoginRequest loginRequest) {
        return new ResponseEntity<>(authService.login(loginRequest), OK);
    }

    @GetMapping("/users")
    @Operation(summary = "Get all users", description = "Retrieve all registered users.")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(authService.getAllUsers(), OK);
    }
    

    @GetMapping("/users/{id}")
    @Operation(summary = "Get user by ID", description = "Retrieve a user by their ID.")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return new ResponseEntity<>(authService.getUserById(id), OK);
    }

    @GetMapping("/users/search")
    @Operation(summary = "Get user by Email")
    public ResponseEntity<User> getUserByEmail(@RequestParam String email) {
        return new ResponseEntity<>(authService.getUserByEmail(email), OK);
    }

    @PutMapping("/users/{id}")
    @Operation(summary = "Update user", description = "Update an existing user's details.")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        return new ResponseEntity<>(authService.updateUser(id, user), OK);
    }

    @PutMapping("/users/update")
    public ResponseEntity<User> updateUserByEmail(@RequestBody User user) {
    User updatedUser = authService.updateUserByEmail(user);
    return new ResponseEntity<>(updatedUser, OK);
}

    @DeleteMapping("/users/{id}")
    @Operation(summary = "Delete user", description = "Delete a user by their ID.")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        authService.deleteUser(id);
        return new ResponseEntity<>("User deleted successfully", OK);
    }
    
}
