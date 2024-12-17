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