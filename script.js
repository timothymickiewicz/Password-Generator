// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// Creating a shuffle for randomizing which character array is selected
// function shuffle(array) {
//   array = array[Math.floor(Math.random() * array.length)];
// }
function shuffle(sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));

      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
  }
  return sourceArray;
}

// Generates password
function generatePassword() {
  var i = ""
  // User decision inputs
  var charCount = prompt("How many characters do you want in your password? Please enter a number between 8 and 128 characters.");
  var lowerCase= confirm("Do you want lower case letters included?")
  var upperCase = confirm("Do you want upper case letters included?");
  var numbers = confirm("Do you want numbers included?")
  var specialCharacters = confirm("Do you want special characters included?");

  
// User input determining length of password, converted to a number format variable if in range
  if (charCount >=8 && charCount <=128) {
    var charCountValue = parseInt(charCount);
  }
  else {
    alert("Aborted due to out of range characters (8 through 128), or user cancelation. Please try again.")
  }
// Upper/Lower case values based on user confirm input
  if (lowerCase === true) {
    lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }
  else {
    lowerCaseValue = void(0);
  }
  if (upperCase === true) {
    upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
  else {
    upperCaseValue = void(0);
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
  
  // Establishing an array of user input arrays
  var collectiveValues = [
    (upperCaseValue),
    (numbersValue),
    (specialCharactersValue),
  ]

  // Concatenating the input from charCount to have a new variable with a string length that has a number of digits that is equal to the number in charCountValue for password generator function to have a comparable string length to know when to end 
  var str1 = "1";
  var charCountValue_toLength = "";
  for (j=0; j < charCountValue; j++) {
    charCountValue_toLength = charCountValue_toLength.concat(str1);
  }
 

// Putting password together by randomizing which array is picked, and then randomizing the selection from each array until length is reached
var completedPassword = "";
  for (i = 0; i <= charCountValue; i++) {
    checkPasswordLength:
    while (completedPassword.length < charCountValue_toLength.length) {

        var randomizeLowerCaseValue = lowerCaseValue[Math.floor(Math.random() * lowerCaseValue.length)];
  
          var completedPassword = completedPassword.concat(randomizeLowerCaseValue);

        if (completedPassword.length == charCountValue_toLength.length) {
          break;
        }

        var randomizeUpperCaseValue = upperCaseValue[Math.floor(Math.random() * upperCaseValue.length)];
  
          var completedPassword = completedPassword.concat(randomizeUpperCaseValue);

        if (completedPassword.length == charCountValue_toLength.length) {
          break;
        }
  
        var randomizeNumbers = numbersValue[Math.floor(Math.random() * numbersValue.length)];
  
          var completedPassword = completedPassword.concat(randomizeNumbers);

        if (completedPassword.length == charCountValue_toLength.length) {
          break;
        }
  
        var randomizeSpecialCharacters = specialCharactersValue[Math.floor(Math.random() * specialCharactersValue.length)];
  
          var completedPassword = completedPassword.concat(randomizeSpecialCharacters);

        if (completedPassword.length !== charCountValue_toLength.length) {
          continue checkPasswordLength;
        }
        else {
          break;
        }
    }

    // used to log the character length in relation to what it should be based off of what the user entered
    function getCharacterLength (str) {
      return [...str].length;
    }
    console.log(getCharacterLength(completedPassword));
    console.log(completedPassword);
    console.log(randomizeUpperCaseValue, randomizeNumbers, randomizeSpecialCharacters);
    console.log(upperCaseValue, numbersValue, specialCharactersValue, charCountValue);
    console.log(collectiveValues);
    console.log(charCountValue_toLength);
    console.log(getCharacterLength(charCountValue_toLength));
    return completedPassword;
  }
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);