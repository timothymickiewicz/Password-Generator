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
  // Establishing variables for generatePassword function  
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
    // If user selects for lower case characters, adds lower case characters to password pool
    if (lowerCase === true) {
        var spliceLowerCase = allPossibleChar.slice(26, 52);
        passwordPool = passwordPool.concat(spliceLowerCase);
        console.log(passwordPool);
    }
    // If user selects for upper case characters, adds upper case characters to password pool
    if (upperCase === true) {
        var spliceUpperCase = allPossibleChar.slice(0, 26);
        passwordPool = passwordPool.concat(spliceUpperCase);
        console.log(passwordPool);
    }
    // If user selects for numbers, adds numbers to password pool
    if (numbers === true) {
        var spliceNumbers = allPossibleChar.slice(52, 62);
        passwordPool = passwordPool.concat(spliceNumbers);
        console.log(passwordPool);
    }
    // If user selects for special characters, adds special characters to password pool
    if (specialCharacters === true) {
        var spliceSpecialCharacters = allPossibleChar.slice(62, 91);
        passwordPool = passwordPool.concat(spliceSpecialCharacters);
        console.log(passwordPool);
    }
    // Concatenating random characters from password pool and forming random password
    for (i = 0; i < charCountValue; i++) {
        var randomPasswordPool = passwordPool[Math.floor(Math.random() * passwordPool.length)];
        var completedPassword = completedPassword.concat(randomPasswordPool);
    }
    function getCharacterLength (str) {
        return [...str].length;
    }
    // Logging to ensure correct length
    console.log(getCharacterLength(completedPassword));
    // Setting fallback in case user selects no characters
    if (lowerCase === false && numbers === false && upperCase === false && specialCharacters === false) {
        alert("You must select at least one character option. Please try again.");
        return completedPassword = "Try Again."
    }
    return completedPassword;
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);