const palindromes = function (string) {
    
    // initialize new reverse string
    let reverseString = "";

    // newString removes all characters except a-z, A-Z, 0-9
    let newString = string.replace(/\W/g, "")

    // console.log(newString.toLowerCase()); 

    // reverse string
    for (let i = newString.length - 1; i >= 0; i--)
        reverseString += newString[i];

    // compare strings in lowercase to avoid case sensativity
    if (newString.toLowerCase() === reverseString.toLowerCase()) {
        return true;
    } else {
        return false; 
    }

};

// Do not edit below this line
module.exports = palindromes;
