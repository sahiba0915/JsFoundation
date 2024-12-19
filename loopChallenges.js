/* 1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable sum. */

let i = 1
let sum = 0
while(i <= 5){
    sum = sum + i
    i++
}

console.log(sum)

/* 2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`. */

let countdown = []
j = 5

while(j >= 1){
  countdown.push(j)
  j--
}

console.log(countdown)



/* 3. Write a `do-while` loop that prompts the user to enter their favorite tea type until they enter `stop`. Store each tea type in an array name `teaCollection`. */
// Note run this in browser as nodejs doesn't support prompt function.

let teaCollection = []
let teaNames

do {
    teas = prompt(`Enter your favorite tea (type "stop" to finish)`)

    if(teas !== "stop"){
        teaCollection.push(teas)
    }
    
} while (teas !== "stop");

console.log(teaCollection)

/* 4. Write a `do-while` loop that adds numbers from 1 to 3 and store the result in varaible named `total`. */

let k = 1
let total = 0

do {
    total = total + k 
    k++
} while (k <= 3);

console.log(total)

/* 6. Write a `for` loop that multiplies each element in the array `[2, 4 , 6] by 2 and stores results in a new array names `multipliedNumbers`. */

let multipliedNumbers = []

let numbers = [2, 4, 6]

for(let l = 0; l < numbers.length; l++){
    multiply = numbers[l] * 2
    multipliedNumbers.push(multiply)
}

console.log(multipliedNumbers)



/* 5. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"] and stores each city in a new array names `cityList`. */


let cityList = []

let cities = ["Paris", "New York", "Tokyo", "London"]

for(let l = 0; l < cities.length; l++){
    city = cities[l]
    cityList.push(city)
}

console.log(cityList)

/* 6. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolog tea"]` and stops the loop when it finds chai. store all the teas before "chai" in a new array named `selectedTeas`. */

let selectedTeas = []
let teas = ["green tea", "black tea", "chai", "oolog tea"]

for (let k = 0; k <= teas.length; k++) {
    if(teas[k] === "chai"){
        break;
    }
    selectedTeas.push(teas[k])
}

console.log(selectedTeas)

/* 7. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `Paris`. Store all the other cities in a new array named `visitedCities`. */

let visitedCities = []
let otherCity = ["London", "New York", "Paris", "Berlin"]

for (let k = 0; k < otherCity.length; k++) {
    if(otherCity[k] === "Paris"){
        continue;
    }
    visitedCities.push(otherCity[k])
}

console.log(visitedCities)

/* 8. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stops when the number `4` is found. Store the numbers before `4` in an array and named `smallNumbers`. */

let smallNumbers = []
let number = [1,2,3,4,5] 

for (const num of number) {
    if (num === 4) {
        break
    }
    smallNumbers.push(num)
}

console.log(smallNumbers)

/* 8. Write a `for-of` loop that loops through the array `["green tea", "black tea", "herbal tea", "oolog tea"]` and skips `herbal tea`. Store all the other teas in a new array named `preferredTeas`. */

let preferredTeas = []
let teaList = ["green tea", "black tea", "herbal tea", "oolog tea"]

for (const tea of teaList) {
    if(tea === "herbal tea"){
        continue
    }
    preferredTeas.push(tea)
}

console.log(preferredTeas)

/* 9. Use a `for-in` loop to loop through an object containing city populations. Stop the loop when population of `Berlin` is found and store all the previous cities populations in a new object named `cityPopulations`.
let citiesPopulation = {
   "London": 890000,
   "New York": 8400000,
   "Paris": 2400000,
    "Berlin": 350000
}*/

let cityNewPopulations = {}
let citiesPopulation = {
    London: 890000,
    "New York": 8400000,
    Paris: 2400000,
    Berlin: 350000
 }

 for (const i in citiesPopulation) {
    if(i === "Berlin"){
        break
    }
    cityNewPopulations[i] = citiesPopulation[i]
 }

 console.log(cityNewPopulations)

 /* 10. Use a `for-in` loop to loop through an object containing city populations. Skip any city with a poulation below 3 million and store rest in a new object named `largeCities`.
let worldCities = {
   Sydney: 5000000,
   Tokyo: 9000000,
   Berlin: 3500000,
   Paris: 220000
}*/

let worldCities = {
    Sydney: 5000000,
    Tokyo: 2000000,
    Berlin: 3500000,
    Paris: 2200000
 }

 let largeCities = {}

 for (const i in worldCities) {
    if(worldCities[i] < 3000000) {
        continue
    }
    largeCities[i] = worldCities[i]
 }

 console.log(largeCities)
