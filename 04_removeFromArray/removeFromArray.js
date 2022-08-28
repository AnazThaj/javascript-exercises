const removeFromArray = function (arr, ...items) {
    for (let i = 0; i < items.length; i++) {
        if (arr.indexOf(items[i]) >= 0) {
            arr.splice(arr.indexOf(items[i]), 1)
        }
    }
    return arr
};

// *Using filter method
// const removeFromArray2 = function(...items) {
//     const array = items[0]
//     return array.filter(item => !items.includes(item))
// }

// Do not edit below this line
module.exports = removeFromArray;
