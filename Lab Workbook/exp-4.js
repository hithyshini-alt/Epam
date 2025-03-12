function reverseNumber(num) {
    const isNegative = num < 0; 
    const reversedNumber = parseInt(
        Math.abs(num).toString().split('').reverse().join('')
    );
    return isNegative ? -reversedNumber : reversedNumber;
}

console.log(reverseNumber(12345)); 
console.log(reverseNumber(-56789)); 
