const removeFromArray = function(array, ...args) {
    
    /*

    Below is code I wrote before looking at solution:


    console.log(array);
    console.log(value);

    // initialize new array
    let newArray = [];

    // run through array length one by one
    for (let i = 0; i < array.length - 1; i++) {
        
        // add array at i to newArray if it doesn't equal value
        if (array.at(i) => !array.includes(args)); {
            newArray = array.toSpliced(i,1);
        }
    }
    */

    // run through each element in original array
    // if element doesn't equal an element from argument(s), 
    // returns boolean true and filters
    return array.filter(element => !args.includes(element));


};

// Do not edit below this line
module.exports = removeFromArray;
