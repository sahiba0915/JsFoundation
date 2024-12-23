/* Js Challenges */
/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/
let teaFlavours = ["green tea", "black tea", "oolong tea"]

let firstTea = teaFlavours[0]
console.log(firstTea)

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
let cities = ["London", "Tokyo", "Paris", "NewYork"]

let favoriteCity = cities[2]
console.log(favoriteCity)

/* 
3. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
let citiesVisited = ["Mumbai", "Sydney"]

citiesVisited.push("Berlin")
console.log(citiesVisited)

/* 
4. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["Chai", "Iced Tea", "Matcha", "Earl Grey"]

let lastOrder = teaOrders.pop() // Output : Earl Grey
console.log(lastOrder)

/* 
5. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"]

let softCopyTeas = popularTeas
console.log(softCopyTeas)

/* 
6. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"]

let hardCopyCities = [...topCities]
console.log(hardCopyCities)

/* 
7. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokya", "Bangkok"]

let worldCities = europeanCities.concat(asianCities)
console.log(worldCities)

/* 
8. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["masala chai", "oolong tea", "earl grey"]

let menuLength = teaMenu.length
console.log(menuLength)

/* 
9. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]

let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList)

/* 10. Write a function squareNumbers(arr) using map() and arrow functions. */

const squareNumbers = (arr) => (
   arr.map(item => item * item)
 );
 
 let squaredNumbers = squareNumbers([1,2,3])
 console.log(squaredNumbers)

 
/* 11. Create a function filterEvenNumbers(arr) using filter() and arrow functions. */

const filterEvenNumbers = (arr) => (
   arr.filter(item => item % 2 === 0)
 );
 
 let evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
 console.log(evenNumbers);

/* 12. Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions. */

const sumPositiveNumbers = (arr) => (
   arr.filter(item => item > 0)
   .reduce((sum, item) => (sum + item), 0)
);

let positiveNumbers = sumPositiveNumbers([1, -2, 3, -4, 6])
console.log(positiveNumbers);

/* 13. Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions. */

let arr = [
   {name: "Sahiba", age: "24"},
   {name: "Komal", age: "23"},
]
const getNames = (arr) => (
   arr.map(item => item.name)
);

let getName = getNames(arr) 
console.log(getName)

/* 14. Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function. */

const findLongestWord = (arr) => (
   arr.reduce((acc, curr) => curr.length > acc.length ? curr : acc, '') 
);

let longestWord = findLongestWord(["sahiba", "komal"])
console.log(longestWord)