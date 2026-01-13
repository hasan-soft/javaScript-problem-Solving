// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"

let reverseWord = (string) => {
    let reverse = string.split("").reverse().join("");
    return reverse;
} 

console.log(reverseWord("hello"));