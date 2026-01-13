// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]


let evenNumbers = (num) => {
    let even = []
    for(let n = 0; n < num.length; n++){
        if(num[n] % 2 === 0){
            even.push(num[n])
        }
    }
    return even;
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6]))