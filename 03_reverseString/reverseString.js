const reverseString = function(string) { // string parameter
    
    // initialize new string
    let newString = "";

    // for loop adding last string character to newString one by one until 0
    for (let i = string.length; i >= 0; i--) {
        newString += string.charAt(i);
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
