// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Generates password
function generatePassword() {
  var i = ""

  // User decision inputs
  var charCount = prompt("How many characters do you want in your password? Please enter a number between 8 and 128 characters.");
  var upperCase = confirm("Do you want upper case letters included?");
  var numbers = confirm("Do you want numbers included?")
  var specialCharacters = confirm("Do you want special characters included?");

  // Establishing an array of arrays
  var collectiveValues = (upperCaseValue, numbersValue, specialCharactersValue);

// User input determining length of password, converted to number format
  if (charCount >=8 && charCount <=128) {
    var charCountValue = parseInt(charCount);
  }
  else {
    alert("Aborted due to out of range characters (8 through 128), or user cancelation. Please try again.")
  }
// Upper/Lower case values based on user confirm input
  if (upperCase === true) {
  upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
  else {
  upperCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  } 
// Numbers values based on user confirm input
  if (numbers === true) {
  numbersValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }
  else {
  numbersValue = void(0);
  }
// Special Characters values based on user confirm input
  if (specialCharacters === true) {
  specialCharactersValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
  }
  else {
  specialCharactersValue = void(0);
  }

  var randomizeUpperCaseValue = upperCaseValue[Math.floor(Math.random() * upperCaseValue.length)];
  var randomizeNumbers = numbersValue[Math.floor(Math.random() * numbersValue.length)];
  var randomizeSpecialCharacters = specialCharactersValue[Math.floor(Math.random() * specialCharactersValue.length)];
  
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }
  console.log(randomizeUpperCaseValue, randomizeNumbers, randomizeSpecialCharacters);
  console.log(upperCaseValue, numbersValue, specialCharactersValue, charCountValue);
  console.log(collectiveValues);
}
// // // Taken from StackOverflow (https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array)
// // function getRandom(arr, n) {
// //   var result = new Array(n),
// //       len = arr.length,
// //       taken = new Array(len);
// //   if (n > len)
// //       throw new RangeError("getRandom: more elements taken than available");
// //   while (n--) {
// //       var x = Math.floor(Math.random() * len);
// //       result[n] = arr[x in taken ? taken[x] : x];
// //       taken[x] = --len in taken ? taken[len] : len;
// //   }
// //   return result;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
