package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    // Setup Method
    @Before
    public void setUp() {
        System.out.println("Setting up test...");
        calculator = new Calculator();
    }

    // Test Method using AAA Pattern
    @Test
    public void testAddition() {

        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(30, result);
    }

    // Teardown Method
    @After
    public void tearDown() {
        System.out.println("Cleaning up after test...");
    }
}