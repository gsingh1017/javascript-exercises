const leapYears = function(year) {

    // true if year is divisible by 4 and 400
    // we immediately check for divisibility of 400 instead of 100 
    if ((year % 4 === 0) && (year % 400 === 0)) {
        return true;
    }

    // true if year is divisible by 4 and not 100
    if ((year % 4 === 0) && (year % 100 != 0)) {
        return true;
    }

    // everything else returns false
    return false;

};

// Do not edit below this line
module.exports = leapYears;
