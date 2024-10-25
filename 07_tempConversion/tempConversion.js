const convertToCelsius = function(temp) {

  // converts to Celsius from Fahrenheit
  // multiply number by 10, round the number, then divide by 10 to round by one decimal
  return Math.round(((temp - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(temp) {

  // converts to Fahrenheit from Celsius
  // multiply number by 10, round the number, then divide by 10 to round by one decimal
  return Math.round(((temp * (9/5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
