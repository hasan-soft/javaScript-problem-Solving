// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false


let palindrome = (string) => {
    let reverse = string.split("").reverse().join("");
    return string === reverse;
}
console.log(palindrome("madam"));
console.log(palindrome("hello"));