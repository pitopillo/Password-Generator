//Variables to use for the password
var pw;

var pwLenght = 8-128;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var Special = ["!", "#", "$", "%", "&", ":", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "{", "}", "~"];

var number = 123456789;


// declar a variable to contain the password.
var pw;

// declare a variable to contain the password length.
var pwLength = 8-128;

//Special value declared
var isSpecialChars;
//Number value declared
var isNumericChars;
//Lowercase value declared
var isLowercaseChars;
//Uppercase value declared
var isUppercaseChars;

function generatePw() {
    prompt("How long would you like this password?")
    
    if (pwLenght < 8 || pwLenght < 128) alert("Password needs to be 8-128 characters");
   
     (pwLenght = NaN) alert ("Needs to be a number");
}