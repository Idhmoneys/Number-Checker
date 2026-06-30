function isPositive(number) {
    return number > 0 ? true : false;
}

function isNegative(number) {
    return number < 0 ? true : false;
}

function isZero(number) {
    return number === 0 ? true : false;
}

function isEven(number) {
    return number % 2 === 0 ? true : false;
}

function isOdd(number) {
    return number % 2 !== 0 ? true : false;
}

function describeNumber(number){
    const obj = new Object;
    obj.positve = isPositive(number);
    obj.negative = isNegative(number);
    obj.zero = isZero(number);
    obj.even = isEven(number);
    obj.odd = isOdd(number);
    return obj;
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));