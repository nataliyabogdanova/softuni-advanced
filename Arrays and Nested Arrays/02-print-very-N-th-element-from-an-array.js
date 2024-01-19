function printEveryN(array, num) {

    let result = [];
    for (let i = 0; i < array.length; i += num) {
        result.push(array[i]);
    }
    return result;
}
console.log(printEveryN(['5','20','31','4','20'],2))