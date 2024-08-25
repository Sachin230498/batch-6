// Quetion :19
// Find the first P Prime Numbers Greator than N
let arr19 = [];
let index19 = 0;
let primeCount19 = 15;
let num = 15;
let func19 = function (num, primeCount19, arr19) {
    if (num == 2) {
        arr19[index19] = num;
        index19++;
        // console.log(arr19);
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                num++;
                func19(num, primeCount19, arr19);
            }
        }
    }
    while (arr19.length < primeCount19) {
        arr19[index19] = num;
        index19++;
        num++;
        func19(num, primeCount19, arr19);
    }
};
func19(num, primeCount19, arr19);
console.log(arr19);
