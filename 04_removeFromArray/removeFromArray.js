const removeFromArray = function (arr, ...items) {
    for (let i = 0; i < items.length; i++) {
        if (arr.indexOf(items[i]) >= 0) {
            arr.splice(arr.indexOf(items[i]), 1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
