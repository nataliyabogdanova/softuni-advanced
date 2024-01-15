function sameNums(num) {
    let isSame = true;
    let sum = 0;
    let numAsStr = num.toString();
    sum += Number(numAsStr[0]);

    for (let i = 1; i < numAsStr.length; i++) {
        if (numAsStr[i] !== numAsStr[i - 1]) {
            isSame = false;
        }
        sum += Number(numAsStr[i]);
    }
    console.log(isSame);
    console.log(sum);
}
sameNums(2222222)