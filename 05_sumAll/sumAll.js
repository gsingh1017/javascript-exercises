const sumAll = function(intOne, intTwo) {
 
    // boolean value to determine if parameters are integers
    if ((Number.isInteger(intOne) != true) || (Number.isInteger(intTwo) != true)) {
        return "ERROR";
    }

    // returns error if parameters are negative numbers
    if ((intOne < 0) || (intTwo < 0)) {
        return "ERROR";
    }

    // initialize number
    let sum = 0;

    if (intOne < intTwo) {

        // for loop if intOne is less than intTwo
        for (let i = 0; i < intTwo; i++){
            sum += intOne + i;
        }
    } else {

        // for loop if intTwo is less than intOne
        for (let i = 0; i < intOne; i++){
            sum += intTwo + i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
