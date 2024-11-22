const findTheOldest = function(obj) {
    
    const currentYear = new Date().getFullYear();
    
    let year = 0;
    let oldest = 0;
    let storePerson = "";

    for (let i = 0; i < obj.length; i++) {

        if (obj[i].yearOfDeath === undefined) {
            year = currentYear;
        } else {
            year = obj[i].yearOfDeath;
        }
        
        if ((year - obj[i].yearOfBirth) > oldest) {
            oldest = year - obj[i].yearOfBirth;
            storePerson = obj[i];
        }
    }
    
    return storePerson; 

};

// Do not edit below this line
module.exports = findTheOldest;
