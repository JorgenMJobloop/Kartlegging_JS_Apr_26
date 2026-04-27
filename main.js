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
    console.log(shoppingList[counter]);
    //console.log(counter);
}