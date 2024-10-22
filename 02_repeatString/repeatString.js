const repeatString = function(string, num) {
    
    // reutrns error when number is negative
    if (num < 0) {
        return "ERROR";
    }

    // initialize new empty string
    let newString = "";

    // add string to newString with no spaces between num times
    for (let i = 0; i < num; i++){
        newString += `${string}`;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
