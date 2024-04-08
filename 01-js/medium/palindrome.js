/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();

  let end = str.length - 1; // Adjusted to point to the last index

  // Check if the length of the string is odd
  if (str.length % 2 !== 0) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[end - i]) {
        return false;
      }
    }
  } else {
    // For even-length palindromes
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[end - i]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = isPalindrome;
