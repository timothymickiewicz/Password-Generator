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
  var allPossibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()-_=+\|]}[{/?.>,<";  
  var passwordPool = "";
  var completedPassword ="";
  // User decision inputs
  var charCount = prompt("How many characters do you want in your password? Please enter a number between 8 and 128 characters.");
  var lowerCase= confirm("Do you want lower case letters included?")
  var upperCase = confirm("Do you want upper case letters included?");
  var numbers = confirm("Do you want numbers included?")
  var specialCharacters = confirm("Do you want special characters included?");

// User input determining length of password, converted to a number format variable if it is in range
if (charCount >=8 && charCount <=128) {
    var charCountValue = parseInt(charCount);
}
else {
    alert("Aborted due to out of range characters (8 through 128), or user cancelation. Please try again.");
}

if (lowerCase === true) {
    var spliceLowerCase = allPossibleChar.slice(26, 52);
    passwordPool = passwordPool.concat(spliceLowerCase);
    console.log(passwordPool);
}

if (upperCase === true) {
    var spliceUpperCase = allPossibleChar.slice(0, 26);
    passwordPool = passwordPool.concat(spliceUpperCase);
    console.log(passwordPool);
}

if (numbers === true) {
    var spliceNumbers = allPossibleChar.slice(52, 62);
    passwordPool = passwordPool.concat(spliceNumbers);
    console.log(passwordPool);
}

if (specialCharacters === true) {
    var spliceSpecialCharacters = allPossibleChar.slice(62, 91);
    passwordPool = passwordPool.concat(spliceSpecialCharacters);
    console.log(passwordPool);
}

for (i = 0; i < charCountValue; i++) {
    var randomPasswordPool = passwordPool[Math.floor(Math.random() * passwordPool.length)];
    var completedPassword = completedPassword.concat(randomPasswordPool);
}
function getCharacterLength (str) {
    return [...str].length;
  }
console.log(getCharacterLength(completedPassword));
  
    // shuffling my completedPassword just for good measure, taken from https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
//     String.prototype.shuffle = function () {
//       var completedPassword = this.split(""),
//           n = completedPassword.length;
  
//       for(var i = n - 1; i > 0; i--) {
//           var j = Math.floor(Math.random() * (i + 1));
//           var tmp = completedPassword[i];
//           completedPassword[i] = completedPassword[j];
//           completedPassword[j] = tmp;
//       }
//       return completedPassword.join("");
//   }
    return completedPassword;
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);