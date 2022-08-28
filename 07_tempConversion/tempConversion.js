const ftoc = function (fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9)
    return Math.round((celsius + Number.EPSILON) * 10) / 10
    // return celsius
};

const ctof = function (celsius) {
    const fahrenheit = (celsius * (9 / 5) + 32)
    return Math.round((fahrenheit + Number.EPSILON) * 10) / 10
    // return fahrenheit
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};
