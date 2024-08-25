// Question :16
// Function return Boolean specifying if a number is prime or not
let func = function (prime_Num) {
    for (let i = 2; i < prime_Num; i++) {
        if (prime_Num % i == 0) {
            return false;
        }
    }
    return true;
};
console.log(func(17));

// Question :17
// Calculate the sum of Positive integer Number        ||      Test Case ------->  Integer + floating Value
let sum = 0;
let lastNum;
num = 45564875.5;
num *= 10; //                                          <-- This Will Convert Floating to Interger Value
while (num > 0) {
    lastNum = num % 10;
    sum = sum + lastNum;
    num -= lastNum;
    num /= 10;
}
console.log(sum);

// Question :18
// Print the First 100 Prime Number

let primeCount = 0;
let isNumPrime = 3;
let func2 = function (isNumPrime) {
    for (let i = 2; i <= Math.sqrt(isNumPrime); i++) {
        if (isNumPrime % i == 0) {
            isNumPrime++;
            func2(isNumPrime);
        }
    }
    while (primeCount <= 100) {
        console.log(isNumPrime);
        primeCount++;
        isNumPrime++;
        func2(isNumPrime);
    }
};
func2(isNumPrime);

//  Alternate way
func3 = function (isNumPrime) {
    if (isNumPrime == 2) return true;
    for (let i = 2; i <= Math.sqrt(isNumPrime); i++) {
        if (isNumPrime % i == 0) {
            return false;
        }
    }
    return true;
};

while (primeCount < 10) {
    if (func3(isNumPrime)) {
        console.log(isNumPrime);
        primeCount++;
    }
    isNumPrime++;
}
