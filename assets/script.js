var pw;

var pwLenght;

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var special = ["!", "#", "$", "%", "&", ":", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "{", "}", "~"];

var number = 123456789;

//Special value declared
var isSpecial;
//Number value declared
var isNumber;
//Lowercase value declared
var isLower;
//Uppercase value declared
var isUpper;

  function  getRandomFromArray(arr) { return arr[Math.random()] }

function generatePw() {
    pwLength = prompt("How long would you like this password?")
    if (pwLength < 8 || pwLength > 128) 
    {
        alert("Password needs to be 8-128 characters");
    }
    else 
    {
        var a = confirm("Include Special?");
        if (a == true) {
            a = special
            getRandomFromArray(special)
            console.log('a', a);
        }
        var b = confirm("Include Upper Case?");
        if (b == true) {
            b = upper
            getRandomFromArray(upper)
        }
        var c = confirm("Include Lower Case?");
        if (c == true) {
            c = lower
            getRandomFromArray(lower)
        }

        var d = confirm("Include Number?")
        if (d == true) {
            d = number
            getRandomFromArray(number)
        }
    }
}
generatePw()