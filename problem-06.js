// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10


let totalCount = (num) => {
    let sum = 0
    for(let n = 0; n < num.length; n++){
        sum = num[n] + sum;
    }
    return sum;
}
console.log(totalCount([1, 2, 3, 4]));