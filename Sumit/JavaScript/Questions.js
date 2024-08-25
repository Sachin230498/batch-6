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
// using simple method
let isPrime;
let count = 0;
primeCount = 10;
let n = 14;
for (let i = n; count < primeCount; i++) {
    isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
        }
    }
    if (isPrime == true) {
        console.log(i);
        count++;
    }
}

// Quetion :19
// Find the first P Prime Numbers Greator than N
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function findPrimesGreatorThanN(num, primeCount19) {
    let arr19 = [];
    let index19 = 0;
    while (arr19.length < primeCount19) {
        if (isPrime(num)) {
            arr19[index19] = num;
            num++;
            index19++;
            isPrime(num);
        } else {
            num++;
            isPrime(num);
        }
    }
    console.log(arr19);
}
findPrimesGreatorThanN(2, 15);

// Question : 20
// Rotate an array to the left | position
let array = [10, 20, 1, 5, 15, 1210, 15, 22, 48];
let x = 0;
let y = array.length - 1;
let z;
for (let i = 0; i < array.length / 2; i++) {
    z = array[x];
    array[x] = array[y];
    array[y] = z;
    x++;
    y--;
}
console.log(array);
