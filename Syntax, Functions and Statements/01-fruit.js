function fruit(str, num1, num2){
let fruit = str;
let weightInGrams = Number(num1);
let pricePerKg = Number(num2);

let weightInKg = weightInGrams/1000;
let moneyNeeded = (weightInKg*pricePerKg).toFixed(2);
console.log(`I need $${moneyNeeded} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('apple', 1563, 2.35)