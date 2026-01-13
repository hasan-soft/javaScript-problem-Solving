// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120


let calculates = (num) => {
    let factorial = 1
    for(let n = 1; n <= num; n++){
        factorial = factorial * n
    }
    return factorial
}
console.log(calculates(5));