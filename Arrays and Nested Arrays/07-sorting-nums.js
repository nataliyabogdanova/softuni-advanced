function sortingNums(array) {
    array.sort((a, b) => a - b);
    let resultArray = [];
    let i = 0;
    let j = array.length - 1;
    while (i <= j) {
        resultArray.push(array[i]);
        if (i !== j) {
            resultArray.push(array[j]);
        }
        i++;
        j--;
    }
    return resultArray;
}
console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))