// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"


let capitalize = (string) => {
    let splitWord = string.split(" ")
    for(let word = 0; word < splitWord.length; word++){
        let upperCase = splitWord[word][0].toUpperCase();
        splitWord[word] = upperCase + splitWord[word].slice(1)
    }
    return splitWord.join(" ")
}
    console.log(capitalize("hello world"))