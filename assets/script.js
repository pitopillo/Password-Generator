//Variables to use for the password
var pw;

var pwLenght = 8-128;

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var special = ["!", "#", "$", "%", "&", ":", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "{", "}", "~"];

var number = 123456789;


// declar a variable to contain the password.
var pw;

// declare a variable to contain the password length.
var pwLength;

//Special value declared
var isSpecial;
//Number value declared
var isNumber;
//Lowercase value declared
var isLower;
//Uppercase value declared
var isUpper;

function generatePw() {
    pw = prompt("How long would you like this password?")
    
    if (isNaN(pw)); {
        alert("Please enter a number!");
        pw = 0;
    pw = prompt("How long would you like this password?")
    }
    
    if (pw < 8 || pw > 128) 
    {
        alert("Password needs to be 8-128 characters");
    }

    else
        var a = confirm("Include Specials?");
        if (a == true) {
            pw == special
        } 
         
        var pw = confirm("Include Lower Case?");
        if (pw == true) {
           pw == lower
        }
        
        var pw = confirm("Include Upper Case?");
        if (pw == true) {
           pw ==  upper
        }

        var d = confirm("Include Numbers?");
        if (d == true) {
          pw == number
        }
        
        else 
        (pw != IsSpecial && lower != isLower && upper != isUpper && number != isNumber)
        {
            alert("Must include one type of character");
        }
    }

