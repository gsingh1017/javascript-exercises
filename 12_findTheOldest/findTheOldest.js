const findAge = function(birthYear, deathYear) {

    if (deathYear === undefined) {
        deathYear = new Date().getFullYear();
    }

    return deathYear - birthYear;
}

const findTheOldest = function(people) {

    return people.reduce((oldest, currentPerson) => {
    
        const oldestAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = findAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        if (currentAge > oldestAge) {
            return currentPerson;           
        } else {
            return oldest;
        }
    });

};

// Do not edit below this line
module.exports = findTheOldest;
