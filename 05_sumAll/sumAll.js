const sumAll = function (start, end) {
    let total = 0; //*starting to adapting the practice of adding ';'

    if (start < 0 || end < 0 || typeof (start) !== 'number' || typeof (end) !== 'number') {
        return 'ERROR'
    } else if (start < end) {
        for (let i = start; i <= end; i++) {
            total += i;
        }
    } else {
        for (let i = end; i <= start; i++) {
            total += i;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
