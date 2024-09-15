// Problem: Calculate Total Price with Tax
// Problem Statement:

// You are tasked with writing a function calculateTotalPrice(prices, taxRate) that 
// calculates the total price of a list of products, including tax. You are given an
// array of prices, and a tax rate (as a percentage).

// Problem
// The current implementation of the calculateTotalPrice function has several issues:

// Inefficient Summation: The function uses a for loop to iterate through the prices array and sum the values. This can be more concisely and efficiently achieved using the reduce method.

// Readability: The code can be made more readable by reducing the number of lines and using more descriptive variable names.

// Edge Cases: The function does not handle edge cases such as an empty prices array or negative values in the prices array, which could lead to incorrect calculations.

// Magic Numbers: The division by 100 to convert the tax rate to a decimal is a magic number that could be extracted into a constant for better readability and maintainability.

// Lack of Input Validation: There is no validation for the inputs prices and taxRate. For example, taxRate should be a non-negative number, and prices should be an array of non-negative numbers.

function calculateTotalPrice(prices, taxRate) {
  let total = 0;
  
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }

  let tax = (total * taxRate) / 100;
  let totalPrice = total + tax;
  
  return totalPrice;
}


