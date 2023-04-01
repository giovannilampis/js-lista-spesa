"use strict"

// get #lista-spesa element in html

let shoppingList = document.getElementById("shopping-list");

// create an array that contains things to buy

let items = ["eggs", "tuna", "olive oil", 
                    "hazelnuts", "almonds", "nuts", 
                    "peanut butter", "salmon", "carrots", 
                    "coffee", "honey", "cucumbers", "soap", 
                    "shaving cream"];

// initialize an index variable with the value 0

let i = 0;

// The while loop runs as long as index ...
// ... is less than the length of the array

while (i < items.length) {

    const item = items[i];

    const itemInList = document.createElement("li");

    itemInList.innerHTML = item;

    shoppingList.append(itemInList)


    // At each iteration, the element of the array ...
    // ... corresponding to the index "i" is printed to the console, ...
    
    console.log(shoppingList[i]);

    // ... and the variable i is incremented by 1
    
    i++;

}