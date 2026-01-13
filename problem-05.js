// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]


const removeDouble = (num) => {
    let newArr = [];
    for(let n = 0; n < num.length; n++){
        if(!newArr.some(a => a === num[n])){
            newArr.push(num[n])
        }
    }
    return newArr;
}
console.log(removeDouble([1, 2, 2, 3, 4, 4]))