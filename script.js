// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// Creating a shuffle for randomizing which character array is selected
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// Generates password
function generatePassword() {
  var i = ""
  // User decision inputs
  var charCount = prompt("How many characters do you want in your password? Please enter a number between 8 and 128 characters.");
  var upperCase = confirm("Do you want upper case letters included?");
  var numbers = confirm("Do you want numbers included?")
  var specialCharacters = confirm("Do you want special characters included?");

  
// User input determining length of password, converted to number format if in range
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

  // Establishing an array of arrays
  var collectiveValues = [
    (upperCaseValue),
    (numbersValue),
    (specialCharactersValue),
  ]

  // Counting the digits in charCountValue to have a string length for generator function to know when to end
  var charCountValue_toLength = charCountValue.toPrecision(charCountValue);

  if (charCountValue_toLength >=100) {
    charCountValue_toLength = charCountValue_toLength.substring(0, (charCountValue_toLength -3));
  }
  else if (charCountValue_toLength >= 10) {
    charCountValue_toLength = charCountValue_toLength.slice(0, (charCountValue_toLength -2));
  }
  else if (charCountValue_toLength < 10) {
    charCountValue_toLength = charCountValue_toLength.slice(2, charCountValue);
  }
// Putting password together by randomizing which array is picked, and then randomizing the selection from each array until length is reached
  for (i = 0; i < charCountValue_toLength.length; i++) {
    var completedPassword = "";
    checkPasswordLength:
    while (completedPassword.length <= charCountValue_toLength.length) {

      shuffle(collectiveValues);

        var randomizeUpperCaseValue = upperCaseValue[Math.floor(Math.random() * upperCaseValue.length)];
  
          var completedPassword = completedPassword.concat(randomizeUpperCaseValue);
  
        var randomizeNumbers = numbersValue[Math.floor(Math.random() * numbersValue.length)];
  
          var completedPassword = completedPassword.concat(randomizeNumbers);
  
        var randomizeSpecialCharacters = specialCharactersValue[Math.floor(Math.random() * specialCharactersValue.length)];
  
          var completedPassword = completedPassword.concat(randomizeSpecialCharacters);

        if (completedPassword.length !== charCountValue_toLength.length) {
          continue checkPasswordLength;
        }
    }
    // used to log the character length in relation to what it should be based off of what the user entered
    function getCharacterLength (str) {
      return [...str].length;
    }
    console.log(getCharacterLength(completedPassword));
    console.log(randomizeUpperCaseValue, randomizeNumbers, randomizeSpecialCharacters);
    console.log(upperCaseValue, numbersValue, specialCharactersValue, charCountValue);
    console.log(collectiveValues);
    console.log(charCountValue_toLength);
    console.log(completedPassword);
    return completedPassword;
  }
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);