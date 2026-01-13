// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9


let largestNumFound = (num) => {
    let largestNum = num[0]
    for (let n = 0; n < num.length; n++) {
        if(num[n] > largestNum){
            largestNum = num[n]
        }
    }
    return largestNum
}
console.log(largestNumFound([5, 1, 9, 3]))