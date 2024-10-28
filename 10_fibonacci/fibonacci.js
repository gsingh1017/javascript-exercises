const fibonacci = function(num) {

    // return OOPS if negative number
    if (num < 0) {
        return "OOPS";
    }

    // return 0 if Fibonacci number is 0
    if (num == 0) {
        return 0;
    }

    // return 1 if Fibonacci number is 1 or 2
    if ((num == 1) || (num == 2)) {
        return 1;
    }

    // Fibonacci 2
    let nMinusOne = 1;
    // Fibonacci 1 
    let nMinusTwo = 1;

    // initialize number
    let n = 0;

    /* 
    // Fn = F(n-1) + F(n-2)
    // loop starts at Fibonacci 3 (F(2) + F(1))
    // F(n-1) gets stored in F(n-2)
    // F(n) gets stored in F(n-1) 
    */
    for (let counter = 2; counter < num; counter++) {
        n = nMinusOne + nMinusTwo;
        nMinusTwo = nMinusOne;
        nMinusOne = n;
    } 

    return n; 
};

// Do not edit below this line
module.exports = fibonacci;
