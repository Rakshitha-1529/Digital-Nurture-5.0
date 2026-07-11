package com.cognizant.jwt_authentication.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.jwt_authentication.model.AuthenticationResponse;
import com.cognizant.jwt_authentication.util.JwtUtil;
@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestHeader("Authorization") String authorizationHeader) {

        // Remove "Basic "
        String encodedCredentials = authorizationHeader.substring(6);

        // Decode Base64
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);

        String credentials =
                new String(decodedBytes, StandardCharsets.UTF_8);

        String[] values = credentials.split(":");

String username = values[0];
String password = values[1];

System.out.println("Username : " + username);
System.out.println("Password : " + password);

String token = JwtUtil.generateToken(username);

return new AuthenticationResponse(token);
    }

}