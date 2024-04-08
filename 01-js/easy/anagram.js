/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  //cheking lenght matching
  if (str1.length !== str2.length) {
    return false;
  }
  const charCount = {};

  //inserting all elements in object
  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount);
  //checking string2
  for (const char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  console.log(charCount);
  return Object.values(charCount).every((count) => count === 0);
}

module.exports = isAnagram;
