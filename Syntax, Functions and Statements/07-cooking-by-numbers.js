function cookingByNums(numAsStr, ...command) {

    let commandOperations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.80
    }
    let num = Number(numAsStr);
    command.forEach(el => {
        num = commandOperations[el](num);
        console.log(num);
    })
}
cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop')