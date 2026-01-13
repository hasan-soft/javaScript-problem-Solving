// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3


let vowel = (string) => {
    let countVowels = string.toLowerCase().split(" ").filter(vwl => vwl === "a" || vwl === "e" || vwl === "i" || vwl === "o" || vwl === "u");
    return countVowels.length;
}
console.log(vowel("programming"));
