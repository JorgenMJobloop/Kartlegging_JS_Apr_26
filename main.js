console.log("Hello, World!");
let num = 1 + 1; // creating a variable, the variable holds the value that is assigned to it. When we use "let" we can also change this value at a later point in the script, however "const" cannot be changed.
num = 15;
console.log(num);
let name = "John Smith";
console.log(name);
const pi = 3.141;
console.log(pi);

/**
 * Datastructures
 */


// Array
const shoppingList = [
    "Milk", 
    "Coca-Cola", 
    "Snus", 
    "Coffee", 
    "Chicken"
];
console.log(shoppingList);
console.log(shoppingList.length);

// for-loop example
for(let counter = 0; counter < shoppingList.length; counter++) {
    //.log("item in array: " + shoppingList[counter] + "\n" + "position of counter: " + counter);
    console.log(`item in array: ${shoppingList[counter]}\n position of counter: ${counter}`);
}

// let num2 = 0;

// for(let i = 0; i < 15; i++) {
//     num2 += i;
//     console.log(num2);
// }
// Object data structure


function addPersonData(name, age, interests, posts, likes) {
    return {
        "name": name,
        "age": age,
        "interests": interests,
        "posts": posts,
        "likesOnallPosts": likes,
    };
}

const johnDoe = addPersonData("John Doe", 33, ["programming", "gaming"], 2, 2);

console.log(johnDoe);

console.log(johnDoe);