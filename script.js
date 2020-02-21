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
  // User decision inputs
  var charCount = prompt("How many characters do you want in your password? Please enter a number between 8 and 128 characters.");
  var lowerCase= confirm("Do you want lower case letters included?")
  var upperCase = confirm("Do you want upper case letters included?");
  var numbers = confirm("Do you want numbers included?")
  var specialCharacters = confirm("Do you want special characters included?");
  // Establishing variables as fall-backs for when user selects "cancel"
  var lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharactersValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
  var completedPassword = "";
  var i = "";
  
  // User input determining length of password, converted to a number format variable if it is in range
  if (charCount >=8 && charCount <=128) {
    var charCountValue = parseInt(charCount);
  }
  else {
    alert("Aborted due to out of range characters (8 through 128), or user cancelation. Please try again.");
  }
  // Lower case value based on user confirm input
  if (lowerCase === true) {
    lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }
  else if (lowerCase === false && upperCase === true) {
    lowerCaseValue = upperCaseValue;
  }
  else if (lowerCase === false && numbers === true) {
    lowerCaseValue = numbersValue;
  }
  else if (lowerCase === false && specialCharacters === true) {
    lowerCaseValue = specialCharactersValue;
  }
  // Upper case value based on user confirm input
  if (upperCase === true) {
    upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
  else if (upperCase === false && lowerCase === true) {
    upperCaseValue = lowerCaseValue;
  }
  else if (upperCase === false && numbers === true) {
    upperCaseValue = numbersValue;
  }
  else if (upperCase === false && specialCharacters === true) {
    upperCaseValue = specialCharactersValue;
  }
  // Numbers values based on user confirm input
  if (numbers === true) {
    numbersValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }
  else if (numbers === false && lowerCase === true) {
    numbersValue = lowerCaseValue;
  }
  else if (numbers === false && upperCase === true) {
    numbersValue = upperCaseValue;
  }
  else if (numbers === false && specialCharacters === true) {
    numbersValue = specialCharactersValue;
  }
  // Special Characters values based on user confirm input
  if (specialCharacters === true) {
    specialCharactersValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
  }
  else if (specialCharacters === false && lowerCase === true) {
    specialCharactersValue = lowerCaseValue;
  }
  else if (specialCharacters === false && upperCase === true) {
    specialCharactersValue = upperCaseValue;
  }
  else if (specialCharacters === false && numbers === true) {
    specialCharactersValue = numbersValue;
  }
  // If user selects none of the character options they get message and can try again
  if (lowerCase === false && numbers === false && upperCase === false && specialCharacters === false) {
    alert("You must select at least one character option. Please try again.");
    completedPassword = "Try Again."
  }

  // Concatenating the input from charCount to have a new variable with a string length that has a number of digits that is equal to the number in charCountValue for password generator function to have a comparable string length to know when to break loop 
  var str1 = "1";
  var charCountValue_toLength = "";
  for (j=0; j < charCountValue; j++) {
    charCountValue_toLength = charCountValue_toLength.concat(str1);
  }
 

  // Putting password together by randomizing a selection from each array until user input length is reached
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
    // used to log character lengths for troubleshooting
    function getCharacterLength (str) {
      return [...str].length;
    }
    console.log(getCharacterLength(completedPassword));
    console.log(completedPassword);
    console.log(randomizeUpperCaseValue, randomizeNumbers, randomizeSpecialCharacters);
    console.log(upperCaseValue, numbersValue, specialCharactersValue, charCountValue);
    console.log(charCountValue_toLength);
    console.log(getCharacterLength(charCountValue_toLength));
    // shuffling my completedPassword just for good measure, taken from https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
    String.prototype.shuffle = function () {
      var completedPassword = this.split(""),
          n = completedPassword.length;
  
      for(var i = n - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = completedPassword[i];
          completedPassword[i] = completedPassword[j];
          completedPassword[j] = tmp;
      }
      return completedPassword.join("");
  }
    return completedPassword;
  }
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);